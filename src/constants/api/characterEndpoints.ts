export const Character_API = {
  get_all: () => `/characters/getall`,
  get_by_id: (id: string | number) => `/characters/getbyid/${id}`,
  create: () => `/characters/create`,
  edit: (id: string | number) => `/characters/update/${id}`,
  delete: (id: string | number) => `/characters/delete/${id}`,
};
