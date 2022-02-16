import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import AboutUs from "./Views/AboutUs";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import ProjectDetail from "./Views/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
