export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //   const isNameValid = (value) => {
  //     if (!value.trim()) {
  //       return "Name is required";
  //     } else if (value.length < 2) {
  //       return "Name must be at least 2 characters";
  //     } else if (!/^[a-zA-Z\s]+$/.test(value)) {
  //       return "Name can only contain letters and spaces";
  //     }
  //     return "";
  //   };
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
