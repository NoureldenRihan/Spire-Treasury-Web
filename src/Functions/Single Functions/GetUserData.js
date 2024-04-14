import apiHandlers from "../../apiHandlers/apiHandlers";

// Retreives User Data
export default async function GetUserData(email) {
  console.log("Getting User Data...");

  const response = await apiHandlers.GetSingleUserData(email);
  console.log(response);

  if (response.status === 200) {
    console.log("Successfully retrieved user data");
    console.log(response.data);
    return { data: response.data };
  } else if (response.status === 500) {
    console.log("Error Occured while retreiving user data");
    return;
  }
}
