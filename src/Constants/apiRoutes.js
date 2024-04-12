// API Host and Routes Grouper

const hostAddress = "http://localhost:5000"; // Needs to be Updated before Production

const apiRoutes = {
  createUser: hostAddress + "/users/signup",
  loginUser: hostAddress + "/users/login",
};

export default apiRoutes;
