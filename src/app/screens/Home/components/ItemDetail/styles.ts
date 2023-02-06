import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '@utils/responsiveUtils';
import {green, red} from '@constants/colors';

export default StyleSheet.create({
  itemContainer: {
    height: verticalScale(52),
    paddingLeft: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '18%',
    justifyContent: 'center',
  },
  image: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(8),
  },
  descriptionContainer: {
    width: '50%',
    paddingRight: verticalScale(2),
    justifyContent: 'space-around',
  },
  descriptionTitle: {
    fontFamily: 'AvenirBold',
    fontSize: 14,
    lineHeight: verticalScale(18),
  },
  descriptionDate: {
    fontFamily: 'AvenirRegular',
    fontSize: 12,
    lineHeight: verticalScale(21),
  },
  pointAndSelectOptionContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsText: {
    fontFamily: 'AvenirBold',
    fontSize: 16,
    marginLeft: scale(2),
    marginRight: scale(10),
  },
  iconContainer: {
    width: scale(20),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(10),
  },
  pointPlus: {
    color: green,
  },
  pointNegative: {
    color: red,
  },
});
