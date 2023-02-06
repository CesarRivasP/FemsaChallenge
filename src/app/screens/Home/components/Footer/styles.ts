import {StyleSheet} from 'react-native';
import {verticalScale} from '@utils/responsiveUtils';
import {IS_IOS} from '@constants/device';

export default StyleSheet.create({
  buttonsContainer: {
    height: verticalScale(70),
  },
  singleButtonContainer: {
    justifyContent: IS_IOS ? 'center' : 'flex-start',
    alignItems: 'center',
  },
  multipleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: IS_IOS ? 'center' : 'flex-start',
  },
  paralelsButtonContainer: {
    flexDirection: 'row',
    width: '48%',
  },
  allButtonContainer: {
    width: '100%',
  },
});
