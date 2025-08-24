import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ComponentPage, DataPage, EventPage, ListPage, PropsPage, StylePage } from "./basic";
import BasicLayout from "./layouts/BasicLayout";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      {/* 공통 Header */}
      <Header />

      {/* 라우터 매핑: URL → 화면 컴포넌트  */}
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          {/* Basic Layout: React Basic 경로들*/}
          <Route path="component" element={<ComponentPage />} />
          <Route path="style" element={<StylePage />} />
          <Route path="data" element={<DataPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="props" element={<PropsPage />} />
        </Route>

        {/* 
        <Route path="/advanced" element={<AdvancedLayout />}>
          <Route path="hooks" element={<HooksPage />} />
          <Route path="context" element={<ContextPage />} />
        </Route>
        */}

        {/* 404: 정의되지 않은 모든 경로 */}
        <Route path="*" element={<div>페이지를 찾을 수 없습니다</div>} />
      </Routes>
    </BrowserRouter>
  );
}
