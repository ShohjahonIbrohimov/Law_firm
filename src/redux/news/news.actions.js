import NEWS_ACTION_TYPES from "./news.action-types";

// CRUD SERVICE
export const startCrudNews = (data) => ({
  type: NEWS_ACTION_TYPES.START_CRUD_NEWS,
  payload: data,
});

export const successCrudNews = (data) => ({
  type: NEWS_ACTION_TYPES.SUCCESS_CRUD_NEWS,
  payload: data,
});
