import { useState } from "react";
import record from "../assets/record.png";
import { styled } from "styled-components";
import stopRecording from "../assets/stop-recording.png";
import { SpeechRecognition } from "@ionic-native/speech-recognition";
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { openai } from "../utils/openAi";

const MainRecording = ({
  setMessage,
}: {
  setMessage: (str: string) => void;
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
            SpeechRecognition.startListening().subscribe(
              async (matches: string[]) => {
                try {
                  const completion = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                      {
                        role: "system",
                        content:
                          "Your role is a pirate character called Jollybeard from a story book. Your objective is to be an entertaining companion to a 6 year old kid. You should respond to messages in a funny manner and your responses should include a lot of pirate slang such as matey, rrrrrrs, arrrrggghhh etc. Your responses should be short and witty and not exceed more than one or two sentences each time.",
                      },
                      { role: "user", content: matches[0] },
                    ],
                  });
                  const response =
                    completion.data.choices[0].message?.content || "";
                  setMessage(response);
                  TextToSpeech.speak({
                    text: response,
                    locale: "en-US",
                    rate: 0.1,
                  });
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

export default MainRecording;

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
