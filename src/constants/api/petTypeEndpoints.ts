export const PET_TYPE_API = {
  get_all: () => `/petTypes/getall`,
  get_by_id: (id: string | number) => `/petTypes/getbyid/${id}`,
  create: () => `/petTypes/create`,
  edit: (id: string | number) => `/petTypes/update/${id}`,
  delete: (id: string | number) => `/petTypes/delete/${id}`,
};
