import SERVICES_ACTION_TYPES from "./service.action-types";

const INITIAL_STATE = {
  services: [],
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SERVICES_ACTION_TYPES.ADD_SERVICE:
      const service = {
        title: "",
        category: [],
        number: !state.services.length ? 1 : state.services.length + 1,
      };
      return {
        ...state,
        services: [...state.services, service],
      };
    case SERVICES_ACTION_TYPES.UPDATE_SERVICE:
      return {
        ...state,
        services: [
          ...state.services.filter((s) => s.number !== action.payload.number),
          action.payload,
        ],
      };
    case SERVICES_ACTION_TYPES.SUCCESS_CRUD_SERVICE:
      switch (action.payload.method) {
        case "GET":
          return {
            services: action.payload.data,
          };
        case "POST":
          return state;
        default:
          return state;
      }
    default:
      return state;
  }
};

export default serviceReducer;
