// API Host and Routes Grouper

const hostAddress = "https://spire-treasury-backend.onrender.com"; // Production Backend Host Address
const devAddress = "http://localhost:5000"; // Development Backend Host Address

const apiRoutes = {
  createUser: hostAddress + "/users/signup",
  loginUser: hostAddress + "/users/login",
  getSingleUser: hostAddress + "/users/user",
};

export default apiRoutes;
