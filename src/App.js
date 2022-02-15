import "./App.css";
import {
  AboutMe,
  ClientSay,
  ContentCreation,
  Footer,
  Intro,
  Newletter,
  SayHello,
} from "./components";
import Header from "./components/Header";
import Projects from "./components/Projects";
import RecentBlogs from "./components/RecentBlogs";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Intro />
      <Projects />
      <ContentCreation />
      <AboutMe />
      <ClientSay />
      <SayHello />
      <RecentBlogs />
      <Newletter />
      <Footer />
    </div>
  );
}

export default App;
