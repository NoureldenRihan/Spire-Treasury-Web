import apiHandlers from "../../apiHandlers/apiHandlers";
import { FunctionsToolBox } from "../FunctionsToolBox";

// Compares two hashed passwords against each other using bcrypt.compare()
export default async function AutoLogin() {
  console.log("Attempting to auto-login...");

  const StoredLoginData =
    await FunctionsToolBox.LocalForageFunctions.getLoginData();

  console.log("Encypted Data Retreived");

  const { email, password } = StoredLoginData;

  const loginFormData = {
    email,
  };

  const response = await apiHandlers.LoginUser(loginFormData);
  console.log(response);
  if (response.status === 200) {
    // Compare the user entered password the database Hashed Password
    const isMatch = await FunctionsToolBox.CompareHashedPasswords(
      password,
      response.data.dbPasswordHash
    );
    if (isMatch) {
      return "/home";
    } else {
      return "/login";
    }
  } else if (response.status === 500 || response.status === 401) {
    if (response.data.didAnErrorOccur) {
      return "/login";
    }
  }
}
