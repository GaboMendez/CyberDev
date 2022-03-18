import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import FavoriteContext from '../../store/favorite-context';

const FavoriteScreen = () => {
  const {favorites} = useContext(FavoriteContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;
