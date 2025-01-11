import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import { Layout } from "./components/common";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
