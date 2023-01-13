import axios from "axios";

export default async function getData(userId) {
  try {
    // Kullanıcı bilgilerini çekmek için istek yap
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    // Kullanıcının postlarını çekmek için istek yap
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = postsResponse.data;

    // Kullanıcı bilgileri ve postlarını birleştir
    const user = {
      ...userData,
      posts: postsData
    };

    return user;
  } catch (error) {
    console.error(error);
  }
}
