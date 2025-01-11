import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import { Layout } from "./components/common";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/match" element={<>match</>} />
        <Route path="/chat" element={<>chat</>} />
        <Route path="/community" element={<>community</>} />
        <Route path="/profile" element={<>profile</>} />
      </Route>
    </Routes>
  );
}

export default App;
