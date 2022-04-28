const jsObject = {
  firstName: "Megha",
  lastName: "Varna",
  age: 22,
  isAdult: false,
  hobbies: ["Cricket", "Singing"],
  pincode: 560083,
  state: "Karnataka",
  city: "Bengaluru",
};
const jsonObject = JSON.stringify(jsObject);
console.log(jsonObject);
const JavaScriptObjects = JSON.parse(jsonObject);
console.log(JavaScriptObjects);
