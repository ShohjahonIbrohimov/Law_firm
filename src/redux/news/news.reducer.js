import NEWS_ACTION_TYPES from "./news.action-types";

const INITIAL_STATE = {
  news: [],
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_ACTION_TYPES.SUCCESS_CRUD_NEWS:
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

export default newsReducer;
