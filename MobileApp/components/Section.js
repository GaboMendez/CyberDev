import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title, alignCenter}): Node => {
  return (
    <View
      style={[styles.sectionContainer, {alignItems: alignCenter && 'center'}]}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#808080',
  },
});

export default Section;
