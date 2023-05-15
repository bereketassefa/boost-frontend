import React from "react";

function Message(props) {
  const { message, detail, type, stuff, countdown } = props;
  function classNames(...args) {
    return args.filter(Boolean).join(" ");
  }
  return (
    <div
      role="alert"
      //   className="rounded border-s-4 border-green-500 bg-red-50 p-4 w-full"
      className={classNames(
        "rounded border-s-4  p-4 w-full flex flex-row justify-between items-center",
        type === "red" && "bg-red-50 border-red-500",
        type === "green" && "border-green-500 bg-green-50"
      )}
    >
      <div>
        <strong
          className={classNames(
            "block font-medium",
            type === "red" && "text-red-800",
            type === "green" && "text-green-800"
          )}
        >
          {message}
          {/* {stuff} */}
          {stuff !== undefined ? (
            <span className="text-[10px] ml-3 bg-red-700 text-white py-1 px-2 rounded-full">
              {stuff}
            </span>
          ) : (
            <span></span>
          )}
        </strong>

        <p
          className={classNames(
            "mt-2 text-sm",
            type === "red" && "text-red-700",
            type === "green" && "text-green-700"
          )}
        >
          {detail}
        </p>
      </div>
      {countdown ? (
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col items-center mr-5 justify-center">
            <p className="text-[15px]">countdown</p>
            <p className="text-[20px]">23:23:23:23</p>
          </div>
          <a
            className="inline-block rounded border border-indigo-600 text-indigo-600 px-12 py-3 text-sm font-medium   hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
          >
            Register
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Message;
