import "./App.css";
import JsxEx from "./JsxEx";
import Welcome from "./Welcome";

const members = [
  {
    name: "홍길동",
    age: 30,
    job: "개발자",
    address: "서울시 강남구",
    gen: "남자",
    isAdult: true,
  },
  {
    name: "김김김",
    age: 24,
    job: "디자이너",
    address: "서울시 서초구",
    gen: "여자",
    isAdult: true,
  },
  {
    name: "박박박",
    age: 28,
    job: "기획자",
    address: "서울시 송파구",
    gen: "남자",
    isAdult: true,
  },
  {
    name: "최최최",
    age: 26,
    job: "마케터",
    address: "서울시 강서구",
    gen: "여자",
    isAdult: true,
  },
];

// 성별, 성인 여부 넣기
function App() {
  return members.map((member, index) => (
    <Welcome key={index} member={member} />
  ));
}

export default App;
