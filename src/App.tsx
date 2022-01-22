import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Main from "./pages/main/Index"
import DoSomeThing from "./pages/doit";
import Header from "./components/herder/header";
import Posting from "./pages/posting/index"
import Whoi from "./pages/isdodo/index";

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Main />}/>
          <Route path="hi" element={<DoSomeThing content={""} />}/>
          <Route path="who" element={<Whoi />}/>
          <Route path="*" element={<NoMatch />} />
          <Route path="/posting" element={<Posting />}/>
        </Route>
      </Routes>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>아무것도 없어요..!</h2>
      <p>
        <Link to="/">메인으로 가기</Link>
      </p>
    </div>
  );
}