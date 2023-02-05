import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from '@constants/routes';
import {appStackNavConfig} from '@navigation/configs';
import Home from '@screens/Home';
import ProductDetail from '@screens/ProductDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator {...appStackNavConfig}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.ProductDetail} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
