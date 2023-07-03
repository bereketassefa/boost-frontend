import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Message from "../components/Message";
import Panel from "../components/Panel";
import Loader from "../components/Loader";

function Student() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/general", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((final) => {
        console.log(final);
        setdata(final);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <Welcome name="student" />
      <nav className="mx-auto  max-w-5xl  p-4  text-3xl">
        <p className="mb-3 text-sm">Registration Status</p>

        {!loading ? (
          <Message
            message={
              data.regStatus === "notstarted"
                ? "Not Registered"
                : data.regStatus
            }
            detail={
              data.regStatus === "enrolled"
                ? "you are currently enrolled "
                : data.regStatus === "notstarted"
                ? "you are currently not registered"
                : " you have finished the semister"
            }
            type={data.regStatus === "notstarted" ? "red" : "green"}
            countdown={data.remainingTime}
          />
        ) : (
          <Loader />
        )}
        <p className="my-3 text-sm">Clerance Status</p>
        {!loading ? (
          data.clearanceStatus?.length === 0 ? (
            <Message
              message="No Clearance issue"
              detail="You don't have any clearance problem"
              type="green"
              // stuff="Sport"
            />
          ) : (
            data.clearanceStatus?.map((each) => (
              <Message
                message={each.issue}
                detail={each.issueDetail}
                type="red"
                stuff={each.clearanceType}
              />
            ))
          )
        ) : (
          <Loader />
        )}
      </nav>
    </>
  );
}

export default Student;
