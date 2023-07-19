import React, { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

function StudentProfile() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setDate] = useState({});

  useEffect(() => {
    document.title = "Bahirdar University Registration and Clearance System";
    fetch(`http://localhost:3000/api/registrar/${params.id}`, {
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
        setDate(final);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto ">
      {loading ? (
        <p>loading</p>
      ) : (
        <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Student Information
            </h3>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.studentInfo.fullName}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Email</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.studentInfo.email}
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Field Of Study
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.studentInfo.fieldOfStudy}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Clearance Record
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <dl>
                    {data.clearanceInfo.map((each) => {
                      return (
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Stuff
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {each.clearanceType}
                          </dd>
                          <dt class="text-sm font-medium text-gray-500">
                            Issue
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {each.issue}
                          </dd>
                          <dt class="text-sm font-medium text-gray-500">
                            Issue Detail
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {each.issueDetail}
                          </dd>
                          <dt class="text-sm font-medium text-gray-500">
                            Clearacne Status
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {each.status ? "clear" : "not fulfilled"}
                          </dd>
                        </div>
                      );
                    })}
                    {/* {JSON.stringify(data.clearanceInfo)} */}
                  </dl>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;
