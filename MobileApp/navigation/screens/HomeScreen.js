import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../../components/Card';
import MovieItem from '../../components/MovieItem';
import {apiKey, apiTopMovies, apiUrl} from '../../config/api.config';

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
            color="#808080"
          />
          <Text style={[styles.Title, {paddingTop: 8}]}>{page}</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            onPress={() => setPage(page + 1)}
            style={{marginTop: 8, marginLeft: 8}}
            color="#808080"
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
                <MovieItem movie={movie} />
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
    color: '#000',
  },
});

export default HomeScreen;
