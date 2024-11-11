// Promise Creation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

// Consuming the promise
fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
