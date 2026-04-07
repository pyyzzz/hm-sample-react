import React from "react";
import "./App.css";
// JSX (JavaScript XML) : 리액트에서 사용하는 비표준 문법
// HTML과 자바스크립트를 혼용하는 방식 하나의 덩어리로 본다.
// 실제 브라우저에서 실행은 Babel이라는 라이브러리를 통해 자바스크립트와 html로 분리되어 실행된다
// {} 표현식 사용 가능
// 한개의 태그로 반환해야 하는 조건이 있음. 여러개의 태그로 구성되는 경우 <></> 같은 빈태그로 싸서 반환
// 이름, 주소, 성별, 나이를 표현식을 사용하여 출력해보기
// 인라인 스타일링 : 리액트에서 DOM 요소에 직접 스타일링을 적용할때는 문자열 혈태가 아니고 객체 형태로 넣어야 함.
// (잘 사용하지 않는 방식)

// class 선택자는 className으로 작성해야 한다. (class는 자바스크립트의 예약어이기 때문에)
// 주소, 성별, 나이에 대한 클래스 선택자 만들고 적용.
// 조건부 렌더링 : 조건에 따라 다른 결과를 보여주는 것
// if문은 사용할 수 없지만 삼항연산자나 논리연산자를 사용하여 조건부 렌더링이 가능하다.

const style = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const JsxBasic = () => {
  const name = "김김김";
  const age = 24;
  const address = "충남 천안시";
  const gen = "남";
  // 커밋
  return (
    <>
      <h3 style={style}>JSX 기본 문법</h3>
      <h3>환영합니다.</h3>
      {name === "김김김" && <h3 className="name">이름 : {name}</h3>}
      {age > 20 ? <h3 className="age">나이 : {age}</h3> : null}
      {address === "충남 천안시" && (
        <h3 className="address">주소 : {address}</h3>
      )}
      {gen ? <h3 className="gen">성별 : {gen}</h3> : null}
    </>
  );
};

export default JsxBasic;
