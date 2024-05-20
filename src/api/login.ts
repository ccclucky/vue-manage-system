import request from "../utils/request";

export async function fetchLogin({ username, password }) {
  try {
    const response = await request({
      url: "/login",
      method: "post",
      data: {
        username: username,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching menu list:", error);
    return [];
  }
}
