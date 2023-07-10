import { styled } from "styled-components";
import "./speak.css";
import { IonPage } from "@ionic/react";
import sound from "../../assets/sound.png";
import bubble from "../../assets/speech-bubble.png";
import backButton from "../../assets/backButton.png";
import { useHistory } from "react-router";
import EricBoy from "../../assets/eric.png";
import RecordVoice from "../../components/RecordVoice";
import TextToSpeach from "../../components/speachToText";
import { useState } from "react";
import TalkingExplore from "../../assets/explorer.gif";
import MainRecordingEric from "../../components/MainRecordingEric";

const Eric = () => {
  const { push } = useHistory();
  const [message, setMessage] = useState<string | undefined>("");
  const [speaking, setSpeaking] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <IonPage id="eric">
      <div className="explore-speak-background-image">
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
          <S.Text>{loading ? "hmm........" : message}</S.Text>
        </S.Bubble>
        <S.Speaker>
          <img
            src={speaking ? TalkingExplore : EricBoy}
            width={250}
            height={250}
          />
        </S.Speaker>
      </div>
      <RecordVoice />
      <TextToSpeach />
      <MainRecordingEric
        setMessage={setMessage}
        setSpeaking={setSpeaking}
        setLoading={setLoading}
      />
    </IonPage>
  );
};

export default Eric;

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
    left: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    width: 280px;
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
