import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteScreen from './screens/FavoriteScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const tabName = 'Tab';
const homeName = 'Home';
const detailName = 'Detail';
const favoritesName = 'Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabbedPage = () => {
  return (
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
        headerTitle: `Gabriel Mendez ${new Date().toLocaleDateString()}`,
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={favoritesName} component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={tabName}
          component={TabbedPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name={detailName} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
