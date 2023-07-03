import React, { useState } from "react";
import Countdown from "react-countdown";
import { toast } from "react-toastify";

function Message(props) {
  const { message, detail, type, stuff, countdown } = props;
  const [data, setdata] = useState(props);
  function classNames(...args) {
    return args.filter(Boolean).join(" ");
  }
  const register = () => {
    return fetch("http://localhost:3000/api/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
  };
  return (
    <div
      role="alert"
      //   className="rounded border-s-4 border-green-500 bg-red-50 p-4 w-full"
      className={classNames(
        "rounded border-s-4  p-4 w-full flex flex-row justify-between items-center",
        data.type === "red" && "bg-red-50 border-red-500 mb-2",
        data.type === "green" && "border-green-500 bg-green-50"
      )}
    >
      <div>
        <strong
          className={classNames(
            "block font-medium",
            data.type === "red" && "text-red-800",
            data.type === "green" && "text-green-800"
          )}
        >
          {data.message}
          {/* {stuff} */}
          {data.stuff !== undefined ? (
            <span className="text-[10px] ml-3 bg-red-700 text-white py-1 px-2 rounded-full">
              {data.stuff}
            </span>
          ) : (
            <span></span>
          )}
        </strong>

        <p
          className={classNames(
            "mt-2 text-sm",
            data.type === "red" && "text-red-700",
            data.type === "green" && "text-green-700"
          )}
        >
          {data.detail}
        </p>
      </div>
      {data.countdown ? (
        <div className="flex flex-row justify-between items-center">
          {/* <div className="flex flex-col items-center mr-5 justify-center">
            <p className="text-[15px]">countdown</p>
            <p className="text-[20px]">23:23:23:23</p>
          </div> */}

          <Countdown date={data.countdown} />
          <button
            onClick={() => {
              // register();
              // const resolveAfter3Sec = new Promise((resolve) =>
              //   setTimeout(resolve, 3000)
              // );
              toast
                .promise(register, {
                  pending: "Sending a request",
                  success: "successfully registered 👌",
                  error: "cannot register 🤯",
                })
                .then((res) => res.text())
                .then((res) =>
                  setdata({
                    message: "enrolled",
                    detail: "you are currently enrolled ",
                    type: "green",

                    countdown: false,
                  })
                );
            }}
            className="inline-block ml-2 rounded border border-indigo-600 text-indigo-600 px-12 py-3 text-sm font-medium   hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
          >
            Register
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Message;
