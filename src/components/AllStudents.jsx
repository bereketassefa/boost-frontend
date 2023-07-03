import React from "react";
import TableLoader from "./TableLoader";
import { useState } from "react";
import { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

import AddStudent from "./AddStudent";

function AllStudents() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/student", {
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
      {loading ? (
        <TableLoader />
      ) : (
        <>
          {data.length === 0 ? (
            <p className="text-center">There is not student in the list</p>
          ) : (
            <>
              <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200 ">
                        <thead className="bg-gray-50 ">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                            >
                              <div className="flex items-center gap-x-3">
                                <span>Student Name</span>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                            >
                              Email
                            </th>

                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                            >
                              Issue
                            </th>

                            <th scope="col" className="relative py-3.5 px-4">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 ">
                          {data?.map((each, index) => (
                            <tr key={index}>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <div className="flex items-center gap-x-2">
                                    <h2 className="font-normal text-gray-800">
                                      {each.fullName}
                                    </h2>
                                  </div>
                                </div>
                              </td>
                              <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                {each.email}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                {each.email}
                              </td>

                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <AlertDialog>
                                  <AlertDialogTrigger>
                                    <Button variant="outline">Add</Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        Add {each.fullName} to the system
                                      </AlertDialogTitle>
                                      <AddStudent email={each.email}>
                                        <AlertDialogCancel>
                                          Cancel
                                        </AlertDialogCancel>
                                      </AddStudent>
                                      {/* <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete your account and
                                        remove your data from our servers.
                                      </AlertDialogDescription> */}
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      {/* <AlertDialogCancel>
                                        Cancel
                                      </AlertDialogCancel> */}
                                      {/* <AlertDialogAction>
                                        <button
                                          onClick={() => {
                                            console.log("message");
                                            toast({
                                              title: "Scheduled: Catch up",
                                              description:
                                                "Friday, February 10, 2023 at 5:57 PM",
                                            });
                                          }}
                                        >
                                          continue
                                        </button>
                                      </AlertDialogAction> */}
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <a
                  href="#"
                  className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:-scale-x-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <span>previous</span>
                </a>

                {/* <div className="items-center hidden md:flex gap-x-3">
                  {[...Array(data[1].val + 10 / 10 - 1)].map((each, index) => (
                    <a
                      href="#"
                      className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60"
                      key={index}
                    >
                      {index + 1}
                    </a>
                  ))}
                </div> */}

                <a
                  href="#"
                  className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 "
                >
                  <span>Next {data.length}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:-scale-x-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default AllStudents;
