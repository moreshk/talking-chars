import { styled } from "styled-components";
import "./speak.css";
import { IonPage } from "@ionic/react";
import sound from "../../assets/sound.png";
import bubble from "../../assets/speech-bubble.png";
import record from "../../assets/record.png";
import backButton from "../../assets/backButton.png";
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { useHistory } from "react-router";
import PirateGirl from "../../assets/pirate-girl.png";

const Piper = () => {
  const { push } = useHistory();
  return (
    <IonPage id="piper">
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
          <S.Text>Hello there</S.Text>
        </S.Bubble>
        <S.Speaker>
          <img src={PirateGirl} width={250} height={250} />
        </S.Speaker>
      </div>
      <S.Record
        onClick={() => {
          TextToSpeech.speak("hello, world!").then(
            function () {
              console.log("sdfakldsfj");
            },
            function (reason) {
              console.log("sdfakldsfj");
            }
          );
        }}
      >
        <img src={record} height={80} />
      </S.Record>
    </IonPage>
  );
};

export default Piper;

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

  Record: styled.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,

  ActionButton: styled.div`
    cursor: pointer;
  `,
};
