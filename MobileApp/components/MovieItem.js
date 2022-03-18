import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {apiBaseImage} from '../config/api.config';

const MovieItem = ({movie, favorite}) => {
  return (
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
        <Image
          style={styles.Image}
          source={{uri: `${apiBaseImage}/${movie.backdrop_path}`}}
          resizeMode={'cover'}
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
        {favorite && (
          <Ionicons
            style={styles.Icon}
            color="#ad1301"
            name="heart"
            size={28}
          />
        )}
        <Text style={styles.Title}>{movie.title}</Text>
        <Text numberOfLines={6} ellipsizeMode="tail" style={styles.Description}>
          {movie.overview}
        </Text>
      </View>
    </View>
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
  Image: {
    width: 110,
    height: 110,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 75,
  },
  Icon: {
    position: 'absolute',
    right: 0,
    top: 2,
  },
});

export default MovieItem;
