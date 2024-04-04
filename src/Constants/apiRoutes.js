// API Host and Routes Grouper

const hostAddress = "http://localhost:5000"; // Needs to be Updated before Production

const apiRoutes = {
  createUser: hostAddress + "/signup",
  loginUser: hostAddress + "/login",
};

export default apiRoutes;
