import { Header } from "../widgets/header/header";
import { Home } from "../pages/home/home";
import { PostCard } from "../pages/post-card/post-card";
import { Navigate, Route, Routes } from "react-router-dom";
import "./app.css";

export const LinkList = {
  post: "post",
  home: "home",
};

export function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to={`/${LinkList.home}`} />} />
            <Route path={LinkList.home} element={<Home />}></Route>
            <Route path={LinkList.post}>
              <Route path=":id" element={<PostCard />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={<Navigate to={`/${LinkList.home}`} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
