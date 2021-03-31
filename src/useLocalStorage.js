const UseLocalStorageState = (defaultValue) => {
  const newData = defaultValue;
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", "[]");
  }

  const oldData = JSON.parse(localStorage.getItem("data"));
  oldData.push(newData);

  localStorage.setItem("data", JSON.stringify(oldData));
};

export default UseLocalStorageState;
