import request from "../utils/request";

export async function fetchMenuList() {
  try {
    const response = await request({
      url: "http://localhost:8080/allApi",
      method: "get",
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching menu list:", error);
    return [];
  }
}
