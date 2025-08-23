import { Link, Outlet } from "react-router-dom";

export default function BasicLayout() {
  return (
    <section>
      <h2 className="text-xl font-semibold">🥚 React Basic</h2>
      <ul className="grid list-disc pl-8 gap-2">
        <li>
          <Link to="/component">컴포넌트 생성 및 중첩하기</Link>
        </li>
        <li>
          <Link to="/style">JSX 마크업 작성 및 스타일 추가하기</Link>
        </li>
        <li>
          <Link to="/data">데이터 표시하기</Link>
        </li>
        <li>
          <Link to="/list">조건부 렌더링 · 리스트 렌더링</Link>
        </li>
        <li>
          <Link to="/event">이벤트 응답 및 화면 업데이트</Link>
        </li>
        <li>
          <Link to="/props">컴포넌트 간에 데이터를 공유하는 방법</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
}
