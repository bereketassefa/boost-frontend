import React from "react";
import Welcome from "../components/Welcome";
import Panel from "../components/Panel";
import Navbar from "../components/Navbar";
import AdvisorList from "../components/AdvisorList";
import RegistratList from "../components/Registrat";

function Registrar() {
  return (
    <div>
      <Navbar />
      <Welcome name="Registrar" />

      <nav className="mx-auto  max-w-5xl  p-4  text-3xl">
        {/* <AdvisorList /> */}
        {/* <h1>registrar</h1> */}
        <RegistratList />
      </nav>
    </div>
  );
}

export default Registrar;
