function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ name: "Mukul", level: "Infinite" });
      } else {
        reject(`Oops! Error fetching data`);
      }
    }, 3000);
  });
}

// Consuming the Promise

// Method 1: Using then() catch()
// fetchUserData()
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

// Method 2: Using async await

async function getUserData() {
  try {
    console.log("Fetching User Data");
    const userData = await fetchUserData();
    console.log("User Data: ", userData);
  } catch (error) {
    console.log(error);
  }
}

getUserData();
