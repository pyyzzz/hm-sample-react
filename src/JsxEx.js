const member = {
  name: "홍길동",
  job: "개발자",
  address: "서울시 강남구",
  gen: "남자",
};

// 1. 멤버 객체의 정보를 JSX 표현식을 사용하여 출력하기

// 2. 조건부 렌더링 : 로그인 상태이면 : const isLogin = true / false
const isLogin = true;

// 로그인 상태가 true이면 멤버 정보를 보여주고 false이면 로그인 해주세요 메시지 출력
// 결과물 예시
// 환영합니다, name 님!
// 오늘도 좋은 하루 되세요!

// 3. 인라인 스타일링으로 member 정보 스타일링 하기.
const nameStyle = {
  color: "royalBlue",
  fontSize: "1.5em",
};
const welcomeStyle = {
  color: "tomato",
  fontSize: "2em",
};
const jobStyle = {
  color: "green",
  fontSize: "1.2em",
};
const addressStyle = {
  color: "purple",
  fontSize: "1.2em",
};
const genStyle = {
  color: "orange",
  fontSize: "1.2em",
};

const JsxEx = () => {
  return (
    <>
      <h3>JSX 연습</h3>
      {isLogin ? (
        <>
          <h3 style={nameStyle}>환영합니다, {member.name} 님!</h3>
          <h3 style={welcomeStyle}>오늘도 좋은 하루 되세요!</h3>
          <h3 style={jobStyle}>직업 : {member.job}</h3>
          <h3 style={addressStyle}>주소 : {member.address}</h3>
          <h3 style={genStyle}>성별 : {member.gen}</h3>
        </>
      ) : (
        <h3>로그인 해주세요.</h3>
      )}
    </>
  );
};

export default JsxEx;
