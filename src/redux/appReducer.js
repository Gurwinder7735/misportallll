import {
  SET_USER,
  SET_TOKEN,
  SET_USERNAME,
  SET_PASSWORD,
  SET_DATA,
  SET_TABLE_DATA,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  SET_SELECTED_OPERATOR,
  SET_SELECTED_PROMOTER,
  SET_SELECTED_SERVICES,
  SET_SELECTED_FROM_DATE,
  SET_SELECTED_TO_DATE,
} from "./actionType";

const initialState = {
  user: "",
  token: "",
  username: "",
  password: "",
  data: null,
  tableData: "",
  selectedOperator: "",
  selectedPromoter: "",
  selectedServices: [],
  selectedFromDate: "",
  selectedToDate: "",
  isLoading: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      console.log('set user');
      return {
        ...state,
        user: action.payload,
      };

    case SET_TOKEN:
      console.log('setting Token');
      return {
        ...state,
        token: action.payload,
      };

    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload,
      };

    case GET_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case SET_SELECTED_OPERATOR:
      return {
        ...state,
        selectedOperator: action.payload,
      };

    case SET_SELECTED_PROMOTER:
      return {
        ...state,
        selectedPromoter: action.payload,
      };

    case SET_SELECTED_SERVICES:
      return {
        ...state,
        selectedServices: action.payload,
      };

    case SET_SELECTED_FROM_DATE:
      return {
        ...state,
        selectedFromDate: action.payload,
      };

    case SET_SELECTED_TO_DATE:
      return {
        ...state,
        selectedToDate: action.payload,
      };
  }
  return state
}

export default appReducer;