import {ADD_FAVORITE, DELETE_FAVORITE} from './favorite-actions';

const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case DELETE_FAVORITE:
      return {};
    default: {
      return state;
    }
  }
};

export default FavoriteReducer;
