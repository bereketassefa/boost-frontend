import React from "react";
import { Link, NavLink } from "react-router-dom";

function Panel({ type }) {
  console.log(type);
  return (
    <div className="w-full bg-gray-100">
      <nav
        aria-label="Site Nav"
        className="flex items-center max-w-5xl pl-3 mx-auto space-x-2"
      >
        {type === "stuff" ? (
          <>
            <NavLink to="studentlist" className="px-5 py-4 ">
              Student List
            </NavLink>
            <NavLink to="allstudents" className="px-5 py-4 ">
              All Student
            </NavLink>
            <NavLink to="addStudent" className="px-5 py-4">
              Add Student
            </NavLink>
          </>
        ) : (
          <>
            <NavLink exact to="studentlist" className="px-5 py-4 ">
              Student List
            </NavLink>
            <NavLink to="stufflist" className="px-5 py-4 ">
              Stuff List
            </NavLink>
            <NavLink to="addstuff" className="px-5 py-4">
              Add Stuff
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default Panel;
