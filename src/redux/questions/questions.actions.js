import QUESTIONS_ACTION_TYPES from "./questions.action-types";

// CRUD questions
export const startCrudQuestions = (data) => ({
  type: QUESTIONS_ACTION_TYPES.START_CRUD_QUESTIONS,
  payload: data,
});

export const successCrudQuestions = (data) => ({
  type: QUESTIONS_ACTION_TYPES.SUCCESS_CRUD_QUESTIONS,
  payload: data,
});
