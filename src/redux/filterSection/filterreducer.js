import { COLORCHANGED, STATUSCHANGED } from '../filterSection/actionType.js';
import initialState from './initialState.js';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case 'added':
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case 'removed':
          return {
            ...state,
            colors: state.colors.filter((c) => c !== color),
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;

