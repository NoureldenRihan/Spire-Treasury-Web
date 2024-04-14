import apiRoutes from "../../Constants/apiRoutes";

// GET Function to retreive a single user Data
const GetSingleUserData = async (email) => {
  try {
    const response = await fetch(apiRoutes.getSingleUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(response.status, data);
      return { status: response.status, data };
    } else {
      const data = await response.json();
      console.log(data);
      console.log(`Error: ${response.status} ${data.error}`);
      return { status: response.status, data };
    }
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

export default GetSingleUserData;
