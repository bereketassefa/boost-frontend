import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Message from "../components/Message";
import Panel from "../components/Panel";
import { Outlet } from "react-router-dom";

function Stuff() {
  return (
    <>
      <Navbar />
      <Welcome name="stuff" />
      <Panel type="stuff" />
      <nav className="mx-auto  max-w-5xl  p-4  text-3xl">
        <Outlet />
      </nav>
    </>
  );
}

export default Stuff;
