import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import { Layout } from "./components/common";
import MatchDetail from "./pages/MatchDetail";
import Match from "./pages/Match";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/match" element={<Match />} />
        <Route path="/match/:id" element={<MatchDetail />} />
        <Route path="/chat" element={<>chat</>} />
        <Route path="/community" element={<>community</>} />
        <Route path="/profile" element={<>profile</>} />
      </Route>
    </Routes>
  );
}

export default App;
