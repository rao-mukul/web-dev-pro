// Task 1
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    // const user = await fetchUser();
    // const posts = await fetchPosts();
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(user);
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

// Task 2
function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(success);
    console.log(failure);
  } catch (error) {
    console.log(error);
  }
}

// Task 3
function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout exceeded"), timeout)
  );

  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 3000)
  );
}

fetchWithTimeout(fetchData(), 2000)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
