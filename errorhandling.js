// console.leg("Hello!");
// console.log(x);
// let myArray = ["hello"];
// let myObj = {name: "someName"};
// console.log(myObj.getAge());

let myObj = {name: "someName"};
try{ //big keyword! This will help with catching errors
    console.log(myObj.getAge());
}catch(error){
    console.error("Error encountered:", error.message);
};
console.log("Program Keeps Running")
