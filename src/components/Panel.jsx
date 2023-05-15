import React from "react";
import { Link, NavLink } from "react-router-dom";

function Panel({ type }) {
  console.log(type);
  return (
    <div className="w-full bg-gray-100">
      <nav
        aria-label="Site Nav"
        className="mx-auto flex max-w-5xl items-center space-x-2  pl-3"
      >
        {type === "stuff" ? (
          <>
            <NavLink to="studentlist" className="py-4 px-5 ">
              Student List
            </NavLink>
            <NavLink to="addStudent" className="py-4 px-5">
              Add Student
            </NavLink>
          </>
        ) : (
          <>
            <NavLink exact to="studentlist" className="py-4 px-5 ">
              Student List
            </NavLink>
            <NavLink to="stufflist" className="py-4 px-5 ">
              Stuff List
            </NavLink>
            <NavLink to="addstuff" className="py-4 px-5">
              Add Stuff
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default Panel;
