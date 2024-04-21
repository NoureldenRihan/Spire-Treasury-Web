import apiRoutes from "../../Constants/apiRoutes";

// POST Function to Open a new Balance based on the supplied Data
const OpenBalance = async (Data) => {
  try {
    const response = await fetch(apiRoutes.openBalance, {
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

export default OpenBalance;
