import {useCallback} from 'react';
// import SplashScreen from 'react-native-splash-screen';
import {useFonts} from 'expo-font';

function useSetupFonts() {
  const [fontsLoaded] = useFonts({
    AvenirBold: require('@assets/fonts/AvenirLTStd-Bold.otf'),
    AvenirMedium: require('@assets/fonts/AvenirLTStd-Medium.otf'),
    AvenirRegular: require('@assets/fonts/AvenirLTStd-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // TODO: FOR RESOLVE
      // SplashScreen.hide();
    }
  }, [fontsLoaded]);

  return {
    fontsLoaded,
    onLayoutRootView,
  };
}
export default useSetupFonts;
