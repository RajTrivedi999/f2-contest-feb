/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

// PrintStudentswithMap()

// PrintStudentsbyForEach()

// addData()

// removeFailedStudent()

// concatenateArray()

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function (value){
    if(value.marks > 50) console.log(value);
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach( function(value) {
    if(value.marks >50) console.log(value);
  });
}

function addData() {
  //Write your code here, just console.log
  var obj={id: 4,name: "susan",age: "20",marks: 45}
  arr.push(obj)
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(i=0;i<arr.length;i++){
    if(arr[i].marks<50){
      arr.splice(i,1);
      i--;
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  var myArr=[
    { id: 5, name: "raj", age: "23", marks: 68 },
    { id: 6, name: "jay", age: "25", marks: 72 },
    { id: 7, name: "dev", age: "12", marks: 91 }
  ]

  arr=arr.concat(myArr);
  console.log(arr);
}
