import React from "react";
import {
  AboutMe,
  ClientSay,
  Newletter,
  RecentBlogs,
  SayHello,
} from "../components";

const AboutUs = () => {
  return (
    <>
      <AboutMe showImg />
      <SayHello />
      <ClientSay />
      <RecentBlogs />
      <Newletter />
    </>
  );
};

export default AboutUs;
