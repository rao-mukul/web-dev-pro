function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log(`User Data: ${userData}`);
  } catch (error) {
    console.log("Error Fetching Data");
  }
}

getUserData();
