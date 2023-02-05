import {StyleSheet} from 'react-native';
import {verticalScale} from '@utils/responsiveUtils';
import {blue, white} from '@constants/colors';
import {scale} from '../../../utils/responsiveUtils';

export default StyleSheet.create({
  container: {
    backgroundColor: blue,
    width: scale(150),
    height: verticalScale(50),
    borderRadius: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: white,
    fontFamily: 'AvenirBold',
    fontSize: 16,
    lineHeight: verticalScale(20),
  },
});
