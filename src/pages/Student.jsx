import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Message from "../components/Message";
import Panel from "../components/Panel";

function Student() {
  return (
    <>
      <Navbar />
      <Welcome name="student" />
      <nav className="mx-auto  max-w-5xl  p-4  text-3xl">
        <p className="mb-3 text-sm">Registration Status</p>
        <Message
          message="Unregistered"
          detail="you are currently enrolled for forth year second semister"
          type="green"
          countdown="true"
        />
        <p className="my-3 text-sm">Clerance Status</p>
        <Message
          message="Unreturned book from library"
          detail="The student did't return any book he borrow"
          type="red"
          stuff="Sport"
        />
      </nav>
    </>
  );
}

export default Student;
