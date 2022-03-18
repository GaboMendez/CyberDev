import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {apiBaseImage, apiKey, apiUrl} from '../../config/api.config';
import Section from './../../components/Section';
import FavoriteContext from '../../store/favorite-context';

const DetailScreen = ({route, navigation}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState({});

  const {favorites, addFavorite, deleteFavorite} = useContext(FavoriteContext);

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const response = await axios.get(
          `${apiUrl}/${movieId}?api_key=${apiKey}&language=en-US`,
        );
        setMovie(response.data);
      } catch (error) {
        // handle error
        alert(error.message);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  const handleFavorite = () => {
    // {id, img, title, overview, rating}
    console.log('press favv');
    const favMovie = {
      id: movie.id,
      title: movie.title,
      img: movie.backdrop_path,
      overview: movie.overview,
      rating: movie.vote_average,
    };
    addFavorite(favMovie);
  };

  if (Object.keys(movie).length === 0) return null;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Image
        style={styles.image}
        source={{uri: `${apiBaseImage}/${movie.poster_path}`}}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          paddingBottom: 12,
        }}>
        <Section title={movie.title} alignCenter>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={[styles.highlight, {fontSize: 18, marginBottom: 12}]}>
              {`${movie.vote_average}/10`}
            </Text>
            <Icon.Button
              name="star"
              backgroundColor="#ffbb2a"
              onPress={handleFavorite}>
              Add to favorites
            </Icon.Button>
          </View>
        </Section>
        <Section title="Overview">
          <Text numberOfLines={10} ellipsizeMode="tail">
            {movie.overview}
          </Text>
        </Section>
        <Section title="Release date">{movie.release_date}</Section>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: Colors.white,
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1.1,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DetailScreen;
