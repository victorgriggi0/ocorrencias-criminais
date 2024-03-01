import { index } from "./index";

export async function getAll() {
  try {
    const result = await index.get("/users/all");

    return {
      localTypes: result.data.localTypes,
    };
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

export async function get(currentPage, pageSize) {
  try {
    const result = await index.get("/users", {
      params: {
        currentPage,
        pageSize,
      },
    });

    return {
      localTypes: result.data.localTypes,
      currentPage: result.data.currentPage,
      totalPages: result.data.totalPages,
    };
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

export async function create(dto) {
  try {
    const result = await index.post("/user", {
      name: dto.name,
      email: dto.email,
      password: dto.password,
      department_id: dto.department,
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

export async function del(dto) {
  try {
    const result = await index.delete(`/user/${dto.id}`);

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

export async function updt(formData, currentDepartment) {
  try {
    const result = await index.put(`/user/${currentDepartment.id}`, {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      department_id: formData.department,
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
