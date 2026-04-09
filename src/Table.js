// 이름, 전화번호, 나이, 직업으로 구성된 10개의 배열을 생성
// table 형태로 구성 해 출력
// map 사용

// 마운트 시점에 서버에서 가져오는 것처럼 구현하기
// 특정 시점에 회원 정보 가져오기, 가져오기 버튼 생성하고 버튼을 누르면 회원정보 가져와서 보여주기
import { useEffect, useState } from "react";
import "./App.css";

const members = [
  { id: 1, name: "김민준", phone: "010-1234-5678", age: 28, job: "개발자" },
  { id: 2, name: "이서연", phone: "010-2345-6789", age: 34, job: "디자이너" },
  { id: 3, name: "박지호", phone: "010-3456-7890", age: 25, job: "학생" },
  { id: 4, name: "최수아", phone: "010-4567-8901", age: 41, job: "교사" },
  { id: 5, name: "정우진", phone: "010-5678-9012", age: 30, job: "의사" },
  { id: 6, name: "윤하은", phone: "010-6789-0123", age: 22, job: "간호사" },
  { id: 7, name: "강도현", phone: "010-7890-1234", age: 38, job: "회계사" },
  { id: 8, name: "임소율", phone: "010-8901-2345", age: 29, job: "마케터" },
  { id: 9, name: "조민서", phone: "010-9012-3456", age: 45, job: "변호사" },
  { id: 10, name: "한지유", phone: "010-0123-4567", age: 33, job: "작가" },
];

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  const handleTableRowClick = (member) => {
    alert(`${member.name}이(가) 눌러졌습니다.`);
  };

  const handleBtnClick = () => {
    setLoading(true);
    setData([]);

    setTimeout(() => {
      setData(members);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleBtnClick}>가져오기</button>

      {loading ? (
        <h2>로딩 중...</h2>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>나이</th>
              <th>직업</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.age}</td>
                <td>{person.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
