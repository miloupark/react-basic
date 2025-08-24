// src/components/Breadcrumbs.jsx
import { ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

// 경로 이름 매핑
const LABELS = {
  "": "React",
  basic: "React Basic",
  component: "컴포넌트 생성 및 중첩하기",
  style: "JSX 마크업 작성 및 스타일 추가하기",
  data: "데이터 표시하기",
  list: "조건부 렌더링 · 리스트 렌더링",
  event: "이벤트 응답 및 화면 업데이트",
  props: "컴포넌트 간에 데이터를 공유하는 방법",
};

const BASIC_PAGES = new Set(["component", "style", "data", "list", "event", "props"]);

export default function Breadcrumbs() {
  // 현재 URL 경로 가져오기
  const { pathname } = useLocation();
  // pathname을 "/" 기준으로 나눠 배열로 만들기
  const segments = (typeof pathname === "string" ? pathname : "").split("/").filter(Boolean);
  // breadcrumbs 항상 Home으로 시작
  const crumbs = [{ to: "/", label: LABELS[""] }];

  // 'React Basic' 가상 항목 추가 (카테고리 용도)
  if (segments[0] && BASIC_PAGES.has(segments[0])) {
    crumbs.push({ to: null, label: LABELS.basic, virtual: true });
  }
  // 누적 경로 acc를 이용해 전체 경로 구성
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    // 'React Basic'은 실제 경로에는 없지만 UX상 중간 단계로 표시하기 위한 가상(Virtual) 항목
    crumbs.push({ to: acc, label: LABELS[seg] ?? decodeURIComponent(seg) });
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm py-3 px-10 border-b bg-neutral-900 border-neutral-700"
    >
      <ol className="flex gap-2">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={`${c.label}-${idx}`} className="flex items-center gap-2">
              {/* virtual이면 클릭 불가(span), 나머지는 NavLink*/}
              {c.virtual ? (
                <span className="text-neutral-400">{c.label}</span>
              ) : (
                <NavLink
                  to={c.to ?? "/"}
                  end
                  className={({ isActive }) =>
                    isLast
                      ? // 마지막 항목은 현재 위치 → 링크 없음
                        "text-neutral-400"
                      : isActive
                      ? "text-blue-400 font-semibold underline underline-offset-2"
                      : "text-blue-300 hover:text-blue-400 underline underline-offset-2"
                  }
                >
                  {c.label}
                </NavLink>
              )}
              {/* 마지막 항목이 아니면 구분자 출력  */}
              {!isLast && (
                <span className="text-neutral-500">
                  <ChevronRight size={16} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
