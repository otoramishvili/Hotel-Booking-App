import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout>Home</Layout>} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;