import { index } from "./index";

export async function createAcl(aclData, currentTeam) {
  try {
    const result = await index.put(`/membership/${currentTeam.id}`, {
      user_id: aclData.user,
    });

    return result;
  } catch (error) {
    if (error.response) {
      console.error("error:", error.response);
      throw error.response.data.message;
    } else if (error.request) {
      console.error("error:", error.request);
      throw "Tempo de requisição esgotado. Tente novamente mais tarde.";
    } else {
      console.error("error:", error.message);
      throw error.message;
    }
  }
}

export async function delAcl(aclData, currentTeam) {
  try {
    const result = await index.delete(`/membership/${currentTeam.id}`, {
      user_id: aclData.user,
    });

    return result;
  } catch (error) {
    if (error.response) {
      console.error("error:", error.response);
      throw error.response.data.message;
    } else if (error.request) {
      console.error("error:", error.request);
      throw "Tempo de requisição esgotado. Tente novamente mais tarde.";
    } else {
      console.error("error:", error.message);
      throw error.message;
    }
  }
}
