import {useCallback} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

function useSetupFonts() {
  const [fontsLoaded] = useFonts({
    AvenirBold: require('@assets/fonts/AvenirLTStd-Bold.otf'),
    AvenirMedium: require('@assets/fonts/AvenirLTStd-Medium.otf'),
    AvenirRegular: require('@assets/fonts/AvenirLTStd-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return {
    fontsLoaded,
    onLayoutRootView,
  };
}
export default useSetupFonts;
