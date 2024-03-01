import { index } from "./index";

export async function createAcl(aclData, currentUser) {
  try {
    const result = await index.put(`/security/acl/${currentUser.id}`, {
      role_id: aclData.role,
      permission_id: aclData.permission,
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

export async function delAcl(aclData, currentUser) {
  try {
    const result = await index.delete(`/security/acl/${currentUser.id}`, {
      role_id: aclData.role,
      permission_id: aclData.permission,
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

export async function createPrivilege(privilegeData, currentRole) {
  try {
    const result = await index.put(`/security/privileges/${currentRole.id}`, {
      permission_id: privilegeData.permission,
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

export async function deletePrivilege(privilegeData, currentRole) {
  try {
    const result = await index.delete(
      `/security/privileges/${currentRole.id}`,
      {
        permission_id: privilegeData.permission,
      }
    );

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
