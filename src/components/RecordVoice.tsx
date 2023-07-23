import { styled } from "styled-components";
import record from "../assets/record.png";
import useMicrophonePermission from "../hooks/useMicrophonePermission";
import { GenericResponse, VoiceRecorder } from "capacitor-voice-recorder";
import { useState } from "react";
import { IonToast } from "@ionic/react";

const RecordVoice = () => {
  const { hasMicrophonePermission, refreshPermission } =
    useMicrophonePermission();
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <>
      {!hasMicrophonePermission && (
        <S.Record
          onClick={async () => {
            try {
              const canRecord =
                (await VoiceRecorder.canDeviceVoiceRecord()) as GenericResponse;
              if (canRecord.value) {
                const getThePermission =
                  (await VoiceRecorder.requestAudioRecordingPermission()) as GenericResponse;
                if (getThePermission.value) {
                  refreshPermission();
                } else {
                  setToastMessage(
                    "You need to give permission to record audio in your settings > chatabox > permissions"
                  );
                  setIsToastOpen(true);
                }
              } else {
                setToastMessage("Your device does not support voice recording");
                setIsToastOpen(true);
              }
            } catch (e) {
              console.log({ e });
            }
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

export default RecordVoice;

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
