import CreateUser from "./Handlers/CreateUser";
import LoginUser from "./Handlers/LoginUser";
import LocalstorageHandler from "./Handlers/LocalstorageHandler";

// Groups All Api Handlers and Functions
const apiHandlers = {
  CreateUser,
  LoginUser,
  LocalstorageHandler,
};

export default apiHandlers;
