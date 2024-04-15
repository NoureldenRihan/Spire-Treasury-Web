// API Host and Routes Grouper

// const hostAddress = "https://spire-treasury-backend.onrender.com"; // Production Backend Host Address
const devAddress = "http://localhost:5000"; // Development Backend Host Address

const apiRoutes = {
  createUser: devAddress + "/users/signup",
  loginUser: devAddress + "/users/login",
  getSingleUser: devAddress + "/users/user",
};

export default apiRoutes;
