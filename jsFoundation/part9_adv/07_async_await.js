function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ name: "chaicode", url: "https://chaicode.com" });
      reject(": reject form Promise");
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("Data fetched successfully");
    // console.log(`User Data: ${userData}`); // ` ` don't work as expected with objects
    console.log("User Data: ", userData);
  } catch (error) {
    console.log("Error Fetching Data", error);
  }
}

getUserData();
