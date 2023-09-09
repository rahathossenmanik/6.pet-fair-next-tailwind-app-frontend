export const PET_API = {
  get_all: () => `/pets/getall`,
  get_by_id: (id: string | number) => `/pets/getbyid/${id}`,
  create: () => `/pets/create`,
  edit: (id: string | number) => `/pets/update/${id}`,
  delete: (id: string | number) => `/pets/delete/${id}`,
  get_all_dog: () => `/pets/getalldog`,
  get_all_cat: () => `/pets/getallcat`,
  get_all_bird: () => `/pets/getallbird`,
  get_all_reptile: () => `/pets/getallreptile`,
  love: (id: string | number) => `/pets/love/${id}`,
};
