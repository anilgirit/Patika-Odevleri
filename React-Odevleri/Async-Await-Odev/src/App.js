import axios from "axios";

async function getData(id) {
  try {
    const { data: users } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    console.log("Users: ", users);
    console.log("Posts: ", posts);
  } catch (error) {
    console.error("ERR");
  }
}

export default getData;
