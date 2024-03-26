// Gets a specific item from the local storage
const getFromLocalStorage = (data) => {
  return localStorage.getItem(data);
};

// Saves a specific item to the local storage
const saveToLocalStorage = (data, dataName) => {
  try {
    localStorage.setItem(dataName, data);
  } catch (error) {
    return Error(error.message);
  }
};

// Local Storage Functions Grouped
const LocalstorageHandler = {
  getFromLocalStorage,
  saveToLocalStorage,
};

export default LocalstorageHandler;
