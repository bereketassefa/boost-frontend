/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: "name",
  label: "name",
  select: false,
  type: "text",
  id: "name",
  placeholder: "write your name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};
export const lastname_validation = {
  name: "lastName",
  label: "Last Name",
  select: false,
  type: "text",
  id: "lastname",
  placeholder: "last name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "password",
  select: false,
  type: "password",
  id: "password",
  placeholder: "type password ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};
export const password_confirm = {
  name: "fieldOfStudy",
  label: "Field of study",

  type: "select",
  id: "fieldOfStudy",
  placeholder: "Field of study",
  select: true,
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const email_validation = {
  name: "email",
  label: "email address",
  select: false,
  type: "email",
  id: "email",
  placeholder: "write your email address",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};

export const issue_validate = {
  name: "issue",
  label: "Issue",
  select: false,
  type: "text",
  id: "issue",
  placeholder: "issue ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const issueDetail_validate = {
  name: "issueDetail",
  label: "Issue Detail",
  select: false,
  multiline: true,
  type: "text",
  id: "issue detail",
  placeholder: "Issue detail",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const role = {
  name: "role",
  label: "Role",

  type: "select",
  id: "role",
  placeholder: "role",
  select: true,
  option: ["sport", "library", "cafe", "faculty", "advisor", "registrar"],
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};
export const field = {
  name: "field",
  label: "Field",

  type: "select",
  id: "fieeld",
  placeholder: "field",
  select: true,
  option: ["Software Engineering", "IT", "Computer Science"],
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};
