/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   return arr.map((id) => {
     if (id.profession === "developer") {
       console.log(id.name);
     }
   });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((id) => {
    if (id.profession === "developer") {
      console.log(id.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let data = {
    id: 4,
    name: "jane",
    age: "21",
    profession: "developer",
  };
  arr.push(data);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  
  
}

function concatenateArray() {
  //Write your code here, just console.log

}
