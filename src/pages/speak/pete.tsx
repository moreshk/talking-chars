import "./speak.css";
import PirateBoy from "../../assets/pirate-boy.png";
import backButton from "../../assets/backButton.png";
import sound from "../../assets/sound.png";
import bubble from "../../assets/speech-bubble.png";
import { styled } from "styled-components";
import { IonPage, IonToast } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import RecordVoice from "../../components/RecordVoice";
import TextToSpeach from "../../components/speachToText";
import MainRecording from "../../components/MainRecording";

const Pete = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { push } = useHistory();
  const [message, setMessage] = useState<string | undefined>("");

  return (
    <IonPage id="pete">
      <div className="speak-background-image">
        <S.Icons>
          <img src={sound} width={30} height={30} />
          <S.ActionButton onClick={() => push("/menu")}>
            <img
              src={backButton}
              width={30}
              height={30}
              onClick={() => push("/menu")}
            />
          </S.ActionButton>
        </S.Icons>
        <S.Bubble>
          <S.Text>{message}</S.Text>
        </S.Bubble>
        <S.Speaker>
          <img src={PirateBoy} width={250} height={250} />
        </S.Speaker>
        <RecordVoice />
        <TextToSpeach />
        <MainRecording setMessage={setMessage} />
      </div>
      <IonToast
        isOpen={isToastOpen}
        message={toastMessage}
        onDidDismiss={() => {
          setIsToastOpen(false);
          setToastMessage("");
        }}
        duration={5000}
      ></IonToast>
    </IonPage>
  );
};

export default Pete;

const S = {
  Speaker: styled.div`
    position: absolute;
    bottom: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,

  Icons: styled.div`
    position: absolute;
    width: 100%;
    right: 4%;
    top: 45%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap: 25px;
  `,
  Bubble: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-image: url(${bubble});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 350px;
    width: 350px;
    position: relative;
    margin: 15% auto;
  `,
  Text: styled.div`
    position: absolute;
    top: 60px;
    left: 60px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
  `,
  ActionButton: styled.div`
    cursor: pointer;
  `,
};
