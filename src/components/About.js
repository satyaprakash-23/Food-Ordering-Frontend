import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Hello!! Myself Satya Prakash</h1>
      <h2>This is the first React project I am working on. </h2>
      <Outlet/>
    </div>
  );
};

export default About;
