function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}
// simulateAsyncTask();

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);
  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);
  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000);
}
// simulateMultipleTasks();

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Fetched data");
  }, 2000);
}
