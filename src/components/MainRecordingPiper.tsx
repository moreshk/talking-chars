import { useState } from "react";
import record from "../assets/record.png";
import { styled } from "styled-components";
import stopRecording from "../assets/stop-recording.png";
import { SpeechRecognition } from "@ionic-native/speech-recognition";
import { openai } from "../utils/openAi";

const MainRecordingPiper = ({
  setMessage,
  setSpeaking,
  setLoading,
}: {
  setMessage: (str: string) => void;
  setSpeaking: (val: boolean) => void;
  setLoading: (val: boolean) => void;
}) => {
  const [startRecording, setStartRecording] = useState(false);

  return (
    <S.Record
      onClick={() => {
        try {
          if (startRecording) {
            setStartRecording(false);
            SpeechRecognition.stopListening();
          } else {
            SpeechRecognition.startListening({ showPopup: false }).subscribe(
              async (matches: string[]) => {
                setLoading(true);
                try {
                  const completion = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                      {
                        role: "system",
                        content:
                          "Your role is a pirate character called Piper the Pirate from a story book. Your objective is to be an entertaining companion to a 6 year old child. You should respond to messages in a funny manner and your responses should include a lot of pirate slang such as matey, rrrrrrs, arrrrggghhh etc. Your responses should be short and witty and not exceed more than one or two sentences each time. Responses must be child friendly.",
                      },
                      { role: "user", content: matches[0] },
                    ],
                  });
                  const response =
                    completion.data.choices[0].message?.content || "";
                  const voiceResponse = await fetch(
                    "https://api.elevenlabs.io/v1/text-to-speech/UsbTp18WLaRmauNA3Hnn",
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
              }
            );
            setStartRecording(true);
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {startRecording ? (
        <img src={stopRecording} height={80} />
      ) : (
        <img src={record} height={80} />
      )}
    </S.Record>
  );
};

export default MainRecordingPiper;

const S = {
  Record: styled.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
};
