function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 3000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching Blog Data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);
    console.log("fetch complete");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
