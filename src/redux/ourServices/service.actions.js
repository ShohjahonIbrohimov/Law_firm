import SERVICES_ACTION_TYPES from "./service.action-types";

// CRUD SERVICE
export const startCrudService = (data) => ({
  type: SERVICES_ACTION_TYPES.START_CRUD_SERVICE,
  payload: data,
});

export const successCrudService = (data) => ({
  type: SERVICES_ACTION_TYPES.SUCCESS_CRUD_SERVICE,
  payload: data,
});

// ADD
export const addService = (data) => ({
  type: SERVICES_ACTION_TYPES.ADD_SERVICE,
  payload: data,
});

// UPDATE
export const updateService = (data) => ({
  type: SERVICES_ACTION_TYPES.UPDATE_SERVICE,
  payload: data,
});

export const deleteService = (data) => ({
  type: SERVICES_ACTION_TYPES.DELETE_SERVICE,
  payload: data,
});
