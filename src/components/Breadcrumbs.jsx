import { NavLink, useLocation } from "react-router-dom";

const LABELS = {
  component: "Basic 컴포넌트 생성 및 중첩하기",
  style: "Basic JSX 마크업 작성 및 스타일 추가하기",
  data: "Basic 데이터 표시하기",
  list: "Basic 조건부 렌더링 · 리스트 렌더링",
  event: "Basic 이벤트 응답 및 화면 업데이트",
  props: "Basic 컴포넌트 간에 데이터를 공유하는 방법",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = typeof location?.pathname === "string" ? location.pathname : "";
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { to: "/", label: "Home" },
    ...segments.map((seg, i) => {
      const to = "/" + segments.slice(0, i + 1).join("/");
      return { to, label: LABELS[seg] ?? seg };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm my-2">
      <ol className="flex gap-2">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={c.to} className="flex items-center gap-2">
              <NavLink
                to={c.to}
                end
                className={({ isActive }) =>
                  isLast
                    ? "text-neutral-400"
                    : isActive
                    ? "text-blue-400 font-semibold underline underline-offset-2"
                    : "text-blue-300 hover:text-blue-400  underline underline-offset-2"
                }
              >
                {c.label}
              </NavLink>
              {!isLast && <span className="text-neutral-500">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
