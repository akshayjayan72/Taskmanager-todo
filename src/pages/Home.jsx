import React from "react";

import Headerbar from "../components/Headerbar/Headerbar";

import Todoform from "../components/Todoform/Todoform";


function Home() {
  return (
    <>
      <Headerbar title=" Taskmanager " />
      <Todoform />
    </>
  );
}
export default Home;
