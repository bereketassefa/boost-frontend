/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import { findInputError, isFormInvalid } from "../utils";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
  select,
  option,
  val,
  disable,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  const input_tailwind =
    "p-4 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60";

  return (
    <div className={cn("flex flex-col w-full gap-2")}>
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className={cn("font-semibold capitalize", "py-1 text-[16px]")}
        >
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline && !select ? (
        <textarea
          id={id}
          type={type}
          className={cn(input_tailwind, className)}
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
      ) : (
        !select && (
          <input
            id={id}
            type={type}
            value={val}
            className={cn(input_tailwind, className)}
            placeholder={placeholder}
            {...register(name, validation)}
          />
        )
      )}
      {select ? (
        <select
          id={id}
          name="pets"
          {...register(name, validation)}
          className={cn("flex flex-col w-full gap-2", className)}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          {option ? (
            option.map((each) => <option value={each}>{each}</option>)
          ) : (
            <>
              <option value="IT">IT</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </>
          )}
        </select>
      ) : (
        ""
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
