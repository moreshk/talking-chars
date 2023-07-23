import { useState } from "react";
import record from "../assets/record.png";
import { styled } from "styled-components";
import stopRecording from "../assets/stop-recording.png";
import { openai, openaiVoiceToText } from "../utils/openAi";
import { ChatCompletionRequestMessage } from "openai";
import { isPlatform } from "@ionic/react";
import { RecordingData, VoiceRecorder } from "capacitor-voice-recorder";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";

const MainRecording = ({
  setMessage,
  setSpeaking,
  setLoading,
  voiceId,
  prompt,
  setAudio,
  messageHistory,
  setMessageHistory,
}: {
  setMessage: (str: string) => void;
  setSpeaking: (val: boolean) => void;
  setLoading: (val: boolean) => void;
  voiceId: string;
  prompt: string;
  setAudio: (audio: HTMLAudioElement) => void;
  messageHistory: ChatCompletionRequestMessage[];
  setMessageHistory: (val: ChatCompletionRequestMessage[]) => void;
}) => {
  const [isPressing, setIsPressing] = useState(false);
  let pressTimer: ReturnType<typeof setTimeout>;
  const desktop = isPlatform("desktop");
  const android = isPlatform("android");
  const onComplete = async (matches: string) => {
    setLoading(true);
    try {
      const newMessageHistory: ChatCompletionRequestMessage[] = [
        {
          role: "system",
          content: prompt,
        },
        ...get30(messageHistory),
        { role: "user", content: matches },
      ];
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: newMessageHistory,
      });
      const response = completion.data.choices[0].message?.content || "";
      newMessageHistory.push({ role: "system", content: response });
      const voiceResponse = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": "54561ffff91ad94269b60d4f8a84edcf",
          },
          body: JSON.stringify({
            text: response,
            voice_settings: {
              stability: 0,
              similarity_boost: 0,
              style: 0.5,
              use_speaker_boost: false,
            },
          }),
        }
      );
      setMessageHistory(newMessageHistory);
      const audioBlob = await voiceResponse.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioElement = new Audio(audioUrl);
      setAudio(audioElement);
      setLoading(false);
      setSpeaking(true);
      audioElement.play();
      audioElement.onended = () => {
        setSpeaking(false);
      };
      setMessage(response);
    } catch (e) {
      console.log(e);
    }
  };
  const handleButtonPress = (): void => {
    setIsPressing(true);

    pressTimer = setTimeout(async () => {
      try {
        const a = await SpeechRecognition.start({
          language: "en-US",
          maxResults: 1,
          partialResults: false,
          prompt: "Say something",
          popup: false,
        });
        if (a?.matches[0]) {
          onComplete(a.matches[0]);
        }
      } catch (e) {
        console.log(e, "error");
      }
    }, 0);
  };

  const handleButtonRelease = async () => {
    setIsPressing(false);
    clearTimeout(pressTimer);
    await SpeechRecognition.stop();
  };

  const handleButtonPressDesktop = (): void => {
    setIsPressing(true);
    pressTimer = setTimeout(() => {
      VoiceRecorder.startRecording();
    });
  };

  const handleButtonReleaseDeskTop = async () => {
    setIsPressing(false);
    clearTimeout(pressTimer);
    try {
      setLoading(true);
      const audioRawData =
        (await VoiceRecorder.stopRecording()) as RecordingData;
      const base64Sound = audioRawData.value.recordDataBase64;
      const mimeType = audioRawData.value.mimeType;
      const url = `data:${mimeType};base64,${base64Sound}`;
      const blob = await fetch(url).then((res) => res.blob());
      const audio = new File([blob], mimeType.split("/")[1]);
      const voiceToText = await openaiVoiceToText.createTranscription(
        audio,
        "whisper-1"
      );
      const newMessageHistory: ChatCompletionRequestMessage[] = [
        {
          role: "system",
          content: prompt,
        },
        ...get30(messageHistory),
        { role: "user", content: voiceToText.data.text },
      ];
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: newMessageHistory,
      });
      const response = completion.data.choices[0].message?.content || "";
      newMessageHistory.push({ role: "system", content: response });
      const voiceResponse = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": "54561ffff91ad94269b60d4f8a84edcf",
          },
          body: JSON.stringify({
            text: response,
            voice_settings: {
              stability: 0,
              similarity_boost: 0,
              style: 0.5,
              use_speaker_boost: false,
            },
          }),
        }
      );
      setMessageHistory(newMessageHistory);
      const audioBlob = await voiceResponse.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioElement = new Audio(audioUrl);
      setAudio(audioElement);
      setLoading(false);
      setSpeaking(true);
      audioElement.play();
      audioElement.onended = () => {
        setSpeaking(false);
      };
      setMessage(response);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  return desktop && !android ? (
    <S.Record
      onMouseDown={handleButtonPressDesktop}
      onMouseUp={handleButtonReleaseDeskTop}
      onTouchStart={handleButtonPressDesktop}
      onTouchEnd={handleButtonReleaseDeskTop}
    >
      {isPressing ? (
        <img
          src={stopRecording}
          height={80}
          style={{ pointerEvents: "none" }}
        />
      ) : (
        <img src={record} height={80} style={{ pointerEvents: "none" }} />
      )}
    </S.Record>
  ) : (
    <S.Record
      onMouseDown={handleButtonPress}
      onMouseUp={handleButtonRelease}
      onTouchStart={handleButtonPress}
      onTouchEnd={handleButtonRelease}
    >
      {isPressing ? (
        <img
          src={stopRecording}
          height={80}
          style={{ pointerEvents: "none" }}
        />
      ) : (
        <img src={record} height={80} style={{ pointerEvents: "none" }} />
      )}
    </S.Record>
  );
};

export default MainRecording;

const S = {
  Record: styled.button`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
    background: transparent;
  `,
};

const get30 = (array: ChatCompletionRequestMessage[]) => {
  if (array.length > 30) {
    const newArray = [...array].slice(array.length - 30);
    return newArray;
  } else {
    return array;
  }
};
