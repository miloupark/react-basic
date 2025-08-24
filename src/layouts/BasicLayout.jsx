import { Link, Outlet, useMatch } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function BasicLayout() {
  const isRoot = !!useMatch({ path: "/", end: true });

  return (
    <section className={isRoot ? "grid px-10 py-5 gap-4" : "gap-0"}>
      {isRoot && <h2 className="text-xl font-semibold py-2">🥚 React Basic</h2>}

      {isRoot ? (
        <ul className="grid list-disc pl-8 gap-2">
          <li>
            <Link to="component" className="hover:text-blue-300 transition-colors">
              컴포넌트 생성 및 중첩하기
            </Link>
          </li>
          <li>
            <Link to="style" className="hover:text-blue-300 transition-colors">
              JSX 마크업 작성 및 스타일 추가하기
            </Link>
          </li>
          <li>
            <Link to="data" className="hover:text-blue-300 transition-colors">
              데이터 표시하기
            </Link>
          </li>
          <li>
            <Link to="list" className="hover:text-blue-300 transition-colors">
              조건부 렌더링 · 리스트 렌더링
            </Link>
          </li>
          <li>
            <Link to="event" className="hover:text-blue-300 transition-colors">
              이벤트 응답 및 화면 업데이트
            </Link>
          </li>
          <li>
            <Link to="props" className="hover:text-blue-300 transition-colors">
              컴포넌트 간에 데이터를 공유하는 방법
            </Link>
          </li>
        </ul>
      ) : (
        <Breadcrumbs />
      )}

      <Outlet />
    </section>
  );
}
