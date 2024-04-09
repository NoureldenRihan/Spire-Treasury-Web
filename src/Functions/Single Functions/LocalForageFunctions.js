import localforage from "localforage";

const storage = localforage.createInstance({
  name: "SpireTreasurySecureStorage",
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE], // Fallback to local storage if indexedDB is unavailable
  storeName: "loginData",
});

async function saveLoginData(email, password) {
  await storage.setItem("loginData", {
    email,
    password,
  });
  console.log("Data Encrypted & Saved");
}

async function getLoginData() {
  try {
    const loginData = await storage.getItem("loginData");
    return loginData;
  } catch (err) {
    console.error("Error retrieving login data:", err);
    return null;
  }
}

const LocalForageFunctions = {
  saveLoginData,
  getLoginData,
};

export default LocalForageFunctions;
