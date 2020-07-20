import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Home from './pages/Home';
import SendMoney from './pages/SendMoney';
import Historic from './pages/Historic';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sendmoney" component={SendMoney} />
        <Stack.Screen name="Historic" component={Historic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
