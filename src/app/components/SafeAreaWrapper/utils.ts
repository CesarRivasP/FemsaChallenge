import {safeAreaCustomBackgrounds} from '@components/SafeAreaWrapper/constants';
import Routes from '@constants/routes';

export const isCustomHeader = (route: Routes) => {
  return safeAreaCustomBackgrounds[route].headCustom || false;
};
