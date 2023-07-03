import React, { useState } from "react";
import { Input } from "./Input";
import {
  email_validation,
  issueDetail_validate,
  issue_validate,
  name_validation,
  password_validation,
  role,
} from "../utils/inputValidations";
import { FormProvider, useForm } from "react-hook-form";

function AddStuff() {
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    setloading(true);
    data.fullName = data.name;
    delete data.name;
    fetch("http://localhost:3000/api/stuff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((data) => data.json())
      .then((final) => {
        if (final === "email already exist") {
          setError(final);
        } else {
          setError("You have succesfully add stuff to the system");
        }
        setloading(false);
        methods.reset();
      });
  });

  return (
    <>
      <FormProvider {...methods}>
        <form action="#" className="mt-8 grid grid-cols-6 gap-6 md:w-[500px]">
          <div className="col-span-5">
            <Input {...name_validation} className={"text-[16px] py-3"} />
          </div>
          <div className="col-span-5">
            <Input {...email_validation} className={"text-[16px] py-3"} />
          </div>

          <div className="col-span-5 ">
            <Input {...password_validation} className={"text-[16px] py-3"} />
          </div>

          <div className="col-span-5 ">
            <Input {...role} className={"text-[16px] py-3"} />
          </div>

          <p className="col-span-6 text-sm">{error}</p>
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              onClick={onSubmit}
              className="flex px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              {loading && (
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 mr-2 text-white animate-spin dark:text-white fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              Login
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default AddStuff;