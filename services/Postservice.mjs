import axios from "axios";

export async function getPosts() {
  try {
    let { data } = await axios.get(
      "https://crunch-dev.netlify.app/.netlify/functions/ReadPost"
    );
    console.log("Postservice:getPosts:data", data.length);
    return data;
  } catch (error) {
    console.log("PostService:getPosts", error);
  }
}
