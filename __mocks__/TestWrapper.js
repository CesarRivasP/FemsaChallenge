import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

function TestWrapper({children}) {
  return <NavigationContainer>{children}</NavigationContainer>;
}

export default TestWrapper;
