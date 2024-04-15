import { HashRouter, Route, Routes } from "react-router-dom";
import { TableShulte } from "./pages/TableShulte/TableShulte";
import { GraphTask } from "./pages/GraphTask/GraphTask";
import { Layout } from "./components/Layout/Layout";
import { RoutePath } from "./types";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<MainPage />} path={RoutePath.MainPage} />
          <Route element={<TableShulte />} path={RoutePath.TableShulte} />
          <Route element={<GraphTask />} path={RoutePath.GraphTask} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
