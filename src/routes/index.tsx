import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Manage from '../pages/Manage';
import Questions from '../pages/Questions';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator>
    <Auth.Screen name= "Main" component={Main} />
    {/* <Auth.Screen name= "Manage" component={Manage} /> */}
    {/* <Auth.Screen name= "Questions" component={Questions} /> */}
  </Auth.Navigator>
)

export default AuthRoutes