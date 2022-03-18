import React, {useContext} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Card from '../../components/Card';
import MovieItem from '../../components/MovieItem';
import FavoriteContext from '../../store/favorite-context';

const FavoriteScreen = ({navigation}) => {
  const {favorites} = useContext(FavoriteContext);

  if (favorites.length === 0) return null;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          flexDirection: 'column',
          margin: 10,
        }}>
        {favorites.map((movie, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() =>
                navigation.navigate('Detail', {
                  movieId: movie.id,
                })
              }>
              <Card>
                <MovieItem movie={movie} favorite />
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default FavoriteScreen;
