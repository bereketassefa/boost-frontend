import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Welcome({ name }) {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/api/general/name", {
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
    <div className="h-20 w-full bg-gray-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4  text-3xl">
        Good Morning , {loading ? "loading" : data[0].fullName}!
      </nav>
    </div>
  );
}

export default Welcome;
