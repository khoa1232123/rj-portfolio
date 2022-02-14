import "./App.css";
import { AboutMe, ClientSay, ContentCreation, Intro } from "./components";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Intro />
      <Projects />
      <ContentCreation />
      <AboutMe />
      <ClientSay />
    </div>
  );
}

export default App;
