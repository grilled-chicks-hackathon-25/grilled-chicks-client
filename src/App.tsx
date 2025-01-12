import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import { Layout } from "./components/common";
import MatchDetail from "./pages/MatchDetail";
import Match from "./pages/Match";
import Chat from "./pages/Chat";
import Community from "./pages/Community";
import ChatList from "./pages/ChatList";
import Wait from "./pages/Wait";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/wait" element={<Wait />} />
      <Route element={<Layout />}>
        <Route path="/match" element={<Match />} />
        <Route path="/match/:id" element={<MatchDetail />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<>profile</>} />
      </Route>
    </Routes>
  );
}

export default App;
