import QUESTIONS_ACTION_TYPES from "./questions.action-types";

const INITIAL_STATE = {
  questions: [],
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONS_ACTION_TYPES.SUCCESS_CRUD_QUESTIONS:
      switch (action.payload.method) {
        case "GET":
          return {
            news: action.payload.data,
          };
        case "POST":
          return { news: [...state.news, action.payload.data] };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default questionsReducer;
