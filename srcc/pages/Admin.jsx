import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Message from "../components/Message";
import Panel from "../components/Panel";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <Navbar />
      <Welcome name="admin" />
      <Panel type="admin" />
      <nav className="mx-auto  max-w-5xl  p-4  text-3xl">
        <Outlet />
      </nav>
    </>
  );
}

export default Admin;
