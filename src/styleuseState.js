import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor || "gray"};
  border-radius: ${(props) => (props.round ? "50%" : "0px")};
`;

const App1 = () => {
  const [color, setColor] = useState(null);
  const [round, setRound] = useState(false);

  return (
    <>
      {/* bgColor props 전달 */}
      <Box bgColor={color} round={round} />

      <button onClick={() => setColor("blue")}>파란색</button>
      <button onClick={() => setColor("red")}>빨간색</button>

      {/* round props 토글 */}
      <button onClick={() => setRound(!round)}>
        {round ? "네모" : "동그라미"}
      </button>
    </>
  );
};

export default App1;
