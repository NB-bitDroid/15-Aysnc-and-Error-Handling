// Synchronous Code - code that runs in order:
console.log("Task 1 complete");
console.log("Task 2 complete");
console.log("Task 3 complete");

// Asynchronous Code allows multiple operations to
// happen at the same time (without waiting for one to finish)
setTimeout(()=>{
    console.log("Task 1 complete");
}, 2000);

console.log("Task 2 complete");
console.log("Task 3 complete");
console.log("Task 4 complete");



// examples that use callbacks

function func1(callback) {
    setTimeout(()=>{
    console.log("Task 1 complete");
    callback();
    }, 2000);
};


func1(()=>{
    console.log("Task 2 complete");
    console.log("Task 3 complete");
    console.log("Task 4 complete");
});