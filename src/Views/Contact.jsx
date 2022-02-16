import React from "react";
import { ClientSay, Newletter, RecentBlogs, SayHello } from "../components";

const Contact = () => {
  return (
    <>
      <SayHello />
      <ClientSay />
      <RecentBlogs />
      <Newletter />
    </>
  );
};

export default Contact;
