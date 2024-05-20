import request from "../utils/request";

export async function fetchAllRole() {
  try {
    const response = await request({
      url: "/role/allRoles",
      method: "get",
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching menu list:", error);
    return [];
  }
}