import { useState } from "react";
import record from "../assets/record.png";
import { styled } from "styled-components";
import stopRecording from "../assets/stop-recording.png";
import { SpeechRecognition } from "@ionic-native/speech-recognition";
import { openai } from "../utils/openAi";

const MainRecording = ({
  setMessage,
  setSpeaking,
  setLoading,
  voiceId,
  prompt,
}: {
  setMessage: (str: string) => void;
  setSpeaking: (val: boolean) => void;
  setLoading: (val: boolean) => void;
  voiceId: string;
  prompt: string;
}) => {
  const [isPressing, setIsPressing] = useState(false);
  let pressTimer: ReturnType<typeof setTimeout>;

  const handleButtonPress = (): void => {
    setIsPressing(true);
    pressTimer = setTimeout(() => {
      SpeechRecognition.startListening({
        showPopup: false,
      }).subscribe(async (matches: string[]) => {
        setLoading(true);
        try {
          const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: prompt,
              },
              { role: "user", content: matches[0] },
            ],
          });
          const response = completion.data.choices[0].message?.content || "";
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
          const audioBlob = await voiceResponse.blob();
          const audioUrl = URL.createObjectURL(audioBlob);
          const audioElement = new Audio(audioUrl);
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
      });
    }, 500);
  };

  const handleButtonRelease = (): void => {
    setIsPressing(false);
    clearTimeout(pressTimer);
    SpeechRecognition.stopListening();
  };

  return (
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
