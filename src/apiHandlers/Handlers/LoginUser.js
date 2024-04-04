import apiRoutes from "../../Constants/apiRoutes";

// POST Function for User Login
const LoginUser = async (Data) => {
  try {
    const response = await fetch(apiRoutes.loginUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
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

export default LoginUser;
