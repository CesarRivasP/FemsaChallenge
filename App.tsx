import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRootView from '@app';
import './src/config';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppRootView />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
