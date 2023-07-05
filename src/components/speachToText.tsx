import { styled } from "styled-components";
import record from "../assets/record.png";
import { SpeechRecognition } from "@ionic-native/speech-recognition";
import { useState } from "react";
import { IonToast } from "@ionic/react";
import useSpeechToTextPermission from "../hooks/useSpeechToTextPermission";

const SpeachToText = () => {
  const { hasSpeechPermission, refreshPermission } =
    useSpeechToTextPermission();
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <>
      {!hasSpeechPermission && (
        <S.Record
          onClick={() => {
            SpeechRecognition.requestPermission().then(
              () => {
                refreshPermission();
              },
              () => {
                setToastMessage(
                  "You need to give Speech recognition permission in your settings"
                );
                setIsToastOpen(true);
              }
            );
          }}
        >
          <img src={record} height={80} />
        </S.Record>
      )}
      <IonToast
        isOpen={isToastOpen}
        message={toastMessage}
        onDidDismiss={() => {
          setIsToastOpen(false);
          setToastMessage("");
        }}
        duration={5000}
      ></IonToast>
    </>
  );
};

export default SpeachToText;

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
