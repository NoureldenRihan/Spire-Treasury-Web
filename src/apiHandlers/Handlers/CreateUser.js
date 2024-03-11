import apiRoutes from "../../Constants/apiRoutes";

// POST Function to Create a new User based on the supplied Data
const CreateUser = async (Data) => {
  try {
    const response = await fetch(apiRoutes.createUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(response.status, data);
      return data;
    } else {
      const data = await response.json();
      console.log(data);
      console.log(`Error: ${response.status} ${data.error}`);
      return null;
    }
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

export default CreateUser;
