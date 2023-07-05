import { styled } from "styled-components";
import "./menu.css";
import { IonContent, IonPage } from "@ionic/react";
import chataBoxImage from "../../assets/chattabox.png";
import PirateGirl from "../../assets/pirate-girl.png";
import PirateBoy from "../../assets/pirate-boy.png";
import chooseBuddy from "../../assets/chooseBuddy.png";
import piper from "../../assets/piper.png";
import pete from "../../assets/pete.png";
import { useHistory } from "react-router";

const Menu = () => {
  const { push } = useHistory();
  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <div className="menu-background-image">
          <S.Title>
            <img src={chataBoxImage} />
          </S.Title>
          <S.Heading>
            <img src={chooseBuddy} />
          </S.Heading>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "40px" }}
          >
            <S.ActionButton onClick={() => push("/speak/piper")}>
              <img src={piper} />
              <img src={PirateGirl} />
            </S.ActionButton>
            <S.ActionButton onClick={() => push("/speak/pete")}>
              <img src={pete} />
              <img src={PirateBoy} />
            </S.ActionButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Menu;

const S = {
  Text: styled.div`
    margin: 0;
  `,
  Heading: styled.p`
    margin: 0;
    text-align: center;
    max-width: 250px;
    margin: auto;
    font-weight: 600;
    margin-top: 20px;
    color: #922e2e;
  `,
  ActionButton: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    margin-top: 25px;
    padding: 10px;
  `,
  Title: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 100px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  `,
};
