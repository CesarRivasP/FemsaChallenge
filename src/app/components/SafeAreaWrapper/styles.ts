import {StyleSheet, ViewStyle} from 'react-native';
import {
  LayoutType,
  safeAreaCustomBackgrounds,
} from '@components/SafeAreaWrapper/constants';
import Routes from '@constants/routes';

export const generateBackgroundColor = (route: Routes, type: LayoutType) => {
  let backgroundColor = null;
  if (type === LayoutType.HEAD) {
    backgroundColor =
      safeAreaCustomBackgrounds[route].backgroundHeadColor || backgroundGray;
  } else {
    backgroundColor =
      safeAreaCustomBackgrounds[route].backgroundColor || backgroundGray;
  }
  return backgroundColor;
};

export default function generateStyles({
  top,
  bottom,
}: {
  top: number;
  bottom: number;
}) {
  return StyleSheet.create({
    customHeadContainer: {
      flex: 0,
    },
    container: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
    },
  });
}
