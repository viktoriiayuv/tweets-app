import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import CardsList from "./components/CardsList/CardsList";
import SharedLayout from "./components/SharedLayout/SharedLayout";
// import HomePage from "./pages/HomePage/HomePage";
// import TweetsPage from "./pages/TweetsPage/TweetsPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
