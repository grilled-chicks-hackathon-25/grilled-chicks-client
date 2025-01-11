import { Route, Routes } from "react-router"
import Landing from "./landing/Landing"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App
