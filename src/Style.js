import styled, { css } from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 10px auto;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.div`
  flex: 1;
  margin: 2px;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 10px 16px;
  color: white;
  border-radius: 2px;

  &.green {
    background-color: green;
  }

  &.orange {
    background-color: orange;
  }

  &.purple {
    background-color: purple;
  }
`;

const ColorBox = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid #ccc;
  border-radius: 15px;
  margin: 10px auto;
  background-color: ${(props) => props.bgColor || "transparent"};
`;

const StyleComp = () => {
  const [color, setColor] = useState(null);

  return (
    <>
      <Container>
        <ButtonContainer>
          <Button className="green" onClick={() => setColor("green")}>
            green
          </Button>
          <Button className="orange" onClick={() => setColor("orange")}>
            orange
          </Button>
          <Button className="purple" onClick={() => setColor("purple")}>
            purple
          </Button>
        </ButtonContainer>
        <ColorBox bgColor={color} /> {}
      </Container>
    </>
  );
};

export default StyleComp;
