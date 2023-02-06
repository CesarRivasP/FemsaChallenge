import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

export const verticalScale = (size: number) => {
  const relation = SCREEN_HEIGHT / guidelineBaseHeight;
  return Math.min(1.2, relation) * size;
};
