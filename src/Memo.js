import { useState, useMemo } from "react";
// useMemo : 컴포넌트의 성능을 최적화 하기 위해서 사용 (이전에 계산된 값을 재사용할 수 있도록 해주는 hook)
// 불필요하게 렌더링 되는 것을 막기 위해 (함수)
// 컴포넌트가 렌더링 되는 조건 : 상위 컴포넌트가 렌더링 될때, 전달 된 props 값이 변경되어 전달 될 때.

// 함수, 시작이 소문자이면 함수
const getAverage = (num) => {
  console.log("평균값 계산 중...");
  if (num.length === 0) return;
  const sum = num.reduce((a, b) => a + b);
  return sum / num.length;
};

const Memo = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState("");

  const handleInsert = () => {
    const nextList = [...list, parseInt(num)]; // 추가된 값으로 새로운 배열 생성
    // 불변성의 원칙, 주소가 바뀌어야 렌더링을 한다 why 내부 값이 바뀌는 것은 리액트가 직접적으로 알 수 없고
    // 그렇게 되면 값이 변경되어도 모르기 때문에 렌더링을 안 함.
    setList(nextList); // 렌더링이 일어남
    console.log(list); // 허나 아직 데이터가 저장되지 않음
    setNum(""); // 입력창 초기화
  };

  const avg = useMemo(() => getAverage(list), [list]);
  // 의존성 배열 안의 값이 바뀔때 getAverage
  // memorize [list] 값이 바뀌지 않으면 이전 값을 기억하고 있음

  return (
    <>
      <input type="text" onChange={(e) => setNum(e.target.value)} value={num} />
      <button onClick={handleInsert}>등록</button>

      <ul>
        {list &&
          list.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}

        <hr />
        <p>평균값 : {avg}</p>
      </ul>
    </>
  );
};

export default Memo;
