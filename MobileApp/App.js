import type {Node} from 'react';
import React from 'react';
import MainContainer from './navigation/MainContainer';
import FavoriteState from './store/FavoriteState';

const App: () => Node = () => {
  return (
    <FavoriteState>
      <MainContainer />
    </FavoriteState>
  );
};

export default App;
