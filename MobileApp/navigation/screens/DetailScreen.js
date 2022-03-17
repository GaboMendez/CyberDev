import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {apiBaseImage, apiKey, apiUrl} from '../../config/api.config';
import Section from './../../components/Section';

const DetailScreen = ({route, navigation}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState({});

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

  if (Object.keys(movie).length === 0) return null;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Image
        style={styles.image}
        source={{uri: `${apiBaseImage}/${movie.backdrop_path}`}}
      />
      <View
        style={{
          backgroundColor: Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    flex: 1,
    aspectRatio: 2,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DetailScreen;
