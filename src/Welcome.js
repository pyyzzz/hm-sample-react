// 컴포넌트는 대문자로 시작해야 함.
// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나뉨. (함수형 컴포넌트가 더 많이 사용됨)
// 함수형 컴포넌트는 가독성이 좋고 코드가 간결함. 현재는 상태관리와 생명주기 관리도 Hooks를 통해 가능.

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const Welcome = ({ member }) => {
  const { name = "Unknown", age = 0, address, gen, isAdult } = member; // 객체 구조 분해 할당
  return (
    <div style={cardStyle}>
      <h3>이름 : {name}</h3>
      <h3>나이 : {age}</h3>
      <h3>주소 : {address}</h3>
      <h3>성별 : {gen}</h3>
      <h3>성인 여부 : {isAdult ? "성인" : "미성년자"}</h3>
    </div>
  );
};

export default Welcome; // 내보내기, 다른 파일에서 import 해서 사용할 수 있도록 함
