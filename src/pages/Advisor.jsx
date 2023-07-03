import React from "react";
import Welcome from "../components/Welcome";
import Panel from "../components/Panel";
import Navbar from "../components/Navbar";
import AdvisorList from "../components/AdvisorList";

function Advisor() {
  return (
    <div>
      <Navbar />
      <Welcome name="stuff" />

      <nav className="mx-auto  max-w-5xl  p-4  text-3xl">
        <AdvisorList />
      </nav>
    </div>
  );
}

export default Advisor;
