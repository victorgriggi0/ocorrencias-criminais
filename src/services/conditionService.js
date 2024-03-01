import { index } from "./index";

export async function getAll() {
  try {
    const result = await index.get("/conditions/all");

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
    const result = await index.get("/conditions", {
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
    const result = await index.post("/condition", {
      name: dto.name,
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
    const result = await index.delete(`/condition/${dto.id}`);

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
    const result = await index.put(`/condition/${currentDepartment.id}`, {
      name: formData.name,
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
