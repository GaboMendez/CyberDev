import React, {useReducer} from 'react';
import {ADD_FAVORITE, DELETE_FAVORITE} from './favorite-actions';
import FavoriteContext from './favorite-context';
import FavoriteReducer from './favorite-reducer';

const FavoriteState = ({children}) => {
  const initialState = {
    favorites: [],
  };

  const [state, dispatch] = useReducer(FavoriteReducer, initialState);

  // Add Favorite
  const addFavorite = favorite => {
    dispatch({type: ADD_FAVORITE, payload: favorite});
  };
  // Delete Favorite
  const deleteFavorite = id => {
    dispatch({type: DELETE_FAVORITE, payload: id});
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites: state.favorites,
        addFavorite,
        deleteFavorite,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteState;
