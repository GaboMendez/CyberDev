import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../../components/Card';
import {
  apiKey,
  apiUrl,
  apiTopMovies,
  apiBaseImage,
} from '../../config/api.config';

const HomeScreen = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getAllMovies = async page => {
      try {
        const response = await axios.get(
          `${apiUrl}/${apiTopMovies}?api_key=${apiKey}&language=en-US&page=${page}`,
        );
        const moviesResponse = response.data;
        setMovies(moviesResponse.results);
      } catch (error) {
        // handle error
        alert(error.message);
      }
    };
    getAllMovies(page);
  }, [page]);

  if (movies.length === 0) return null;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          flexDirection: 'column',
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 10,
          }}>
          <Ionicons
            name="arrow-back"
            size={24}
            onPress={() => page > 1 && setPage(page - 1)}
            style={{marginTop: 8, marginRight: 8}}
          />
          <Text style={[styles.Title, {paddingTop: 8}]}>{page}</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            onPress={() => setPage(page + 1)}
            style={{marginTop: 8, marginLeft: 8}}
          />
        </View>
        {movies.map((movie, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() =>
                navigation.navigate('Detail', {
                  movieId: movie.id,
                })
              }>
              <Card>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Avatar.Image
                      size={110}
                      source={{
                        uri: `${apiBaseImage}/${movie.backdrop_path}`,
                      }}
                    />
                    <Text style={[styles.Title, {paddingTop: 8}]}>
                      {movie.vote_average}/10
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 18,
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
            </TouchableOpacity>
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
