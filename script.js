/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(DeveloperMap);
  function DeveloperMap(array){
    if(array.profession==="developer"){
      console.log(array);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.map(DeveloperEach);
  function DeveloperEach(array){
    if(array.profession==="developer"){
      console.log(array);
    }
  }
}

function addData() {
  let NewOne={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(NewOne);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  let Newarr = [
    { id: 5, name: "peter", age: "54", profession: "supermain" },
    { id: 6, name: "quakmayer", age: "52", profession: "producter" },
    { id: 7, name: "meg", age: "19", profession: "headofdep" },
  ];
  let makeOne=arr.concat(Newarr);
  console.log(makeOne);
}
