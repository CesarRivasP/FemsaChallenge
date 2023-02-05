import React from 'react';
import {View} from 'react-native';
import RootNavigator from '@navigation/index';
import useSetupFonts from '@hooks/useSetupFonts';

export default function AppRootView() {
  const {fontsLoaded, onLayoutRootView} = useSetupFonts();
  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      {fontsLoaded ? <RootNavigator /> : null}
    </View>
  );
}
