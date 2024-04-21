import CreateUser from "./Handlers/CreateUser";
import LoginUser from "./Handlers/LoginUser";
import LocalstorageHandler from "./Handlers/LocalstorageHandler";
import GetSingleUserData from "./Handlers/GetSingleUserData";
import OpenBalance from "./Handlers/OpenBalance";

// Groups All Api Handlers and Functions
const apiHandlers = {
  CreateUser,
  LoginUser,
  LocalstorageHandler,
  GetSingleUserData,
  OpenBalance,
};

export default apiHandlers;
