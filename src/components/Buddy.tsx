import React from "react";
import { useHistory } from "react-router";
import { styled } from "styled-components";

interface IBuddyProps {
  titleImg: string;
  charImg: string;
  name: string;
}

const Buddy = ({ titleImg, charImg, name }: IBuddyProps) => {
  const { push } = useHistory();
  return (
    <S.ActionButton onClick={() => push(`/speak/${name}`)}>
      <img src={titleImg} />
      <img src={charImg} />
    </S.ActionButton>
  );
};

export default Buddy;

const S = {
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
};
