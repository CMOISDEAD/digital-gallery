import { Route, Routes } from "react-router";
import { Home } from "@/pages/home";
import { Layout } from "@/components/layout/layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
