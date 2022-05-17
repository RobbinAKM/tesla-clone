import React from "react";
import styled from "styled-components";
import "../App.css";

function Section({ id, title, des, img, leftTx, rightTx }) {
  return (
    <Wrap bgImg={img}>
      <ItemText>
        <h1>{title}</h1>
        <p>{des}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftTx}</LeftButton>
          {rightTx ? <RightButton>{rightTx}</RightButton> : null}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" className="downArrow" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("images/${props.bgImg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 256px;
  border-radius: 100px;
  opacity: 0.5;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 20px;
`;

const RightButton = styled(LeftButton)`
  background: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 30px;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Section;
