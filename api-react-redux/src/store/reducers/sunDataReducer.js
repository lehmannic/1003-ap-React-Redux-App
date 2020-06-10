import * as sunActions from '../actions/sunActionTypes';

const initialState = {
  data: {
  },
  isFetching: false,
  error: '',
};

export const sunDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case sunActions.FETCH_SUN_START:
      return {
        ...state,
        isFetching: true,
      };
    case sunActions.FETCH_SUN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        data: action.payload
      };
    default:
      return state;
  }
};
