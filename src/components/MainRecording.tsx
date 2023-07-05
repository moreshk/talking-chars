import { useState } from "react";
import record from "../assets/record.png";
import { styled } from "styled-components";
import stopRecording from "../assets/stop-recording.png";
import { SpeechRecognition } from "@ionic-native/speech-recognition";
import { TextToSpeech } from "@ionic-native/text-to-speech";

const MainRecording = () => {
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
              (matches: string[]) => {
                TextToSpeech.speak({
                  text: matches[0],
                  locale: "en-US",
                  rate: 0.1,
                });
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
