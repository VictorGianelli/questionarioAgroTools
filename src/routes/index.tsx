import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Manage from '../pages/Manage';
import Questions from '../pages/Questions';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      // headerShown: false
      headerTintColor: '#EEE',
      headerStyle: {
        backgroundColor: '#D0FEFE70'
      },
      cardStyle: { backgroundColor: '#1F3B4D' }
    }}
  // initialRouteName="Questions"
  >
    <Auth.Screen name="Main" component={Main}
      options={{
        headerTitle: "Início"
      }}
    />
    <Auth.Screen name="Manage" component={Manage}
      options={{
        headerTitle: "",
        //headerShown: false,
      }} />
    <Auth.Screen name="Questions" component={Questions}
      options={{
        headerTitle: "Questões"
      }} />
  </Auth.Navigator>
);

export default AuthRoutes