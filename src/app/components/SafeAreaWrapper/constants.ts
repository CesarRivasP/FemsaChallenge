import Routes from '@constants/routes';
import {backgroundGray, lightBlue} from '@constants/colors';

export enum LayoutType {
  HEAD = 'HEAD',
  BODY = 'BODY',
}

export const safeAreaCustomBackgrounds = {
  [Routes.Home]: {
    headCustom: false,
    backgroundHeadColor: null,
    backgroundColor: backgroundGray,
  },
  [Routes.ProductDetail]: {
    headCustom: true,
    backgroundHeadColor: lightBlue,
    backgroundColor: backgroundGray,
  },
};
