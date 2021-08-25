const baseUrl = " https://flynn.boolean.careers/exercises/api/boolgram/";

export const getPosts = async () => {
  const url = baseUrl + "posts";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};
