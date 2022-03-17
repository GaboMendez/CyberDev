import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Card from '../../components/Card';

const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated';
const apiKey = 'bf091621962bdf5c30339e874a2a0c1a';
const baseImage = 'https://image.tmdb.org/t/p/w500';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}?api_key=${apiKey}&language=en-US&page=1`,
        );
        const moviesResponse = response.data;
        setMovies(moviesResponse.results);
      } catch (error) {
        // handle error
        alert(error.message);
      }
    };
    getAllMovies();
  }, []);

  if (!movies) return null;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          margin: 10,
        }}>
        {movies?.map((movie, idx) => {
          return (
            <Card key={idx}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  size={100}
                  source={{
                    uri: `${baseImage}/${movie.backdrop_path}`,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 10,
                    flex: 1,
                  }}>
                  <Text style={styles.Title}>{movie.title}</Text>
                  <Text
                    numberOfLines={6}
                    ellipsizeMode="tail"
                    style={styles.Description}>
                    {movie.overview}
                  </Text>
                </View>
              </View>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 24,
    fontWeight: '600',
  },
  Description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default HomeScreen;
