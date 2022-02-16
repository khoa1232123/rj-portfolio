import React from "react";
import {
  AboutMe,
  ClientSay,
  ContentCreation,
  Intro,
  Newletter,
  Projects,
  RecentBlogs,
  SayHello,
} from "../components";

const Home = () => {
  return (
    <>
      <Intro />
      <Projects />
      <ContentCreation />
      <AboutMe />
      <ClientSay />
      <SayHello />
      <RecentBlogs />
      <Newletter />
    </>
  );
};

export default Home;
