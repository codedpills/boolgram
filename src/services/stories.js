const baseUrl = " https://flynn.boolean.careers/exercises/api/boolgram/";

export const getStories = async () => {
  const url = baseUrl + "profiles";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const stories = await res.json();
    return stories;
  } catch (error) {
    console.log(error);
  }
};
