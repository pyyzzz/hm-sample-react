import { useState, useEffect } from "react";

const EffectInfo = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되어 useEffect 호출");
    console.log(`${name} ${nickname}`);
  }, [nickname]); // [] 의존성 배열, 비어있다면 마운트(처음 화면이 그려지는 시점)에서만 동작
  // useState props 가 들어갈 수 있고 ...
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="이름을 입력하세요"
        />
        <br />

        <input
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          placeholder="닉네임을 입력하세요"
        />
      </div>

      <div>
        <p>이름 : {name}</p>
        <p>닉네임 : {nickname}</p>
      </div>
    </>
  );
};

export default EffectInfo;
