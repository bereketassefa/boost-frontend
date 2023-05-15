import React from "react";

function Welcome({ name }) {
  return (
    <div className="h-20 w-full bg-gray-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4  text-3xl">
        Good Morning , {name}!
      </nav>
    </div>
  );
}

export default Welcome;
