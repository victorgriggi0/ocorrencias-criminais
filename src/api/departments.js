import { index } from "./index";

export async function getAll() {
  try {
    const result = await index.get("/departments/all");

    return {
      departments: result.data.departments,
    };
  } catch (error) {
    console.error("error:", error.response);
    throw error.response.data.message;
  }
}

export async function get(currentPage, pageSize) {
  try {
    const result = await index.get("/departments", {
      params: {
        currentPage,
        pageSize,
      },
    });

    return {
      departments: result.data.departments,
      currentPage: result.data.currentPage,
      totalPages: result.data.totalPages,
    };
  } catch (error) {
    console.error("error:", error.response);
    throw error.response.data.message;
  }
}

export async function create(dto) {
  try {
    const result = await index.post("/department", {
      name: dto.name,
      zip: dto.zip,
      state: dto.state,
      city: dto.city,
      neighborhood: dto.neighborhood,
      avenue: dto.avenue,
    });

    return result;
  } catch (error) {
    console.error("error:", error.response);
    throw error.response.data.message;
  }
}

export async function del(dto) {
  try {
    const result = await index.delete(`/department/${dto.id}`);

    return result;
  } catch (error) {
    console.error("error:", error.response);
    throw error.response.data.message;
  }
}

export async function updt(formData, currentDepartment) {
  try {
    const result = await index.put(`/department/${currentDepartment.id}`, {
      name: formData.name,
      zip: formData.zip,
      state: formData.state,
      city: formData.city,
      neighborhood: formData.neighborhood,
      avenue: formData.avenue,
    });

    return result;
  } catch (error) {
    console.error("error:", error.response);
    throw error.response.data.message;
  }
}
