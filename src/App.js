import { AppBar, Box, Button } from "@mui/material";
import ResponsiveAppBar from "./LoginRedux/header";
import Pagelogin from "./LoginRedux/login";
import { Route, Routes } from "react-router-dom";
import Page2 from "./EovlTechUI/Container1/Page2";
import Services from "./LoginRedux/services";
import Projects from "./LoginRedux/Projects";
import Aboutus from "./LoginRedux/about";
import TodoMain from "./redux/todomain";
import { useState } from "react";
import Dashboard from "./LoginRedux/Dashboard";
// import Section1 from "./EovlTechUI/Container2/Section1";
// import Section2 from "./EovlTechUI/Container2/Section2";
// import Section2a from "./EovlTechUI/Container2/Section2a";
// import Section3 from "./EovlTechUI/Container2/Section3";
// import Section3a from "./EovlTechUI/Container2/Section3a";
// import Section4 from "./EovlTechUI/Container2/Section4";
// import Section4a from "./EovlTechUI/Container2/Section4a";
// import Section5 from "./EovlTechUI/Container2/Section5";
// import Section5a from "./EovlTechUI/Container2/Section5a";
// import Section6 from "./EovlTechUI/Container2/Section6";
// import TodoMain from "./redux/todomain";

function App() {
  return (
    <>
      {/* <MyComponent /> */}
      {/* <TodoMain /> */}
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Pagelogin />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
      {/* <Section1 />
      <Section2 />
      <Section2a />
      <Section3 />
      <Section3a />
      <Section4 />
      <Section4a />
      <Section5 />
      <Section5a />
      <Section6 /> */}
    </>
  );
}

export default App;
