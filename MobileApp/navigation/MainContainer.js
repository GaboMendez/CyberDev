import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteScren from './screens/FavoriteScreen';
import HomeScreen from './screens/HomeScreen';

const homeName = 'Home';
const favoritesName = 'Favorites';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === favoritesName) {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={focused ? size + 6 : size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#008000',
          tabBarInactiveTintColor: '#434142',
          tabBarLabelStyle: {paddingBottom: 10, fontSize: 14},
          tabBarStyle: {
            padding: 10,
            height: 70,
          },
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={favoritesName} component={FavoriteScren} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
