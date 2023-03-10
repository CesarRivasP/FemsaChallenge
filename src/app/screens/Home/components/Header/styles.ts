import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '@utils/responsiveUtils';
import {blue, gray, white, solidBlack} from '@constants/colors';

export default StyleSheet.create({
  headContainer: {
    flex: 0.35,
  },
  headerContainer: {
    height: verticalScale(55),
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'AvenirBold',
    fontSize: 20,
    lineHeight: verticalScale(20),
  },
  titleUsername: {
    fontFamily: 'AvenirRegular',
    fontSize: 16,
    lineHeight: verticalScale(20),
  },
  labelText: {
    color: gray,
    fontFamily: 'AvenirBold',
    fontSize: 14,
    lineHeight: verticalScale(20),
  },
  cardContainer: {
    height: verticalScale(220),
    paddingVertical: verticalScale(4),
  },
  cardInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(8),
  },
  cardInfo: {
    backgroundColor: blue,
    height: verticalScale(120),
    width: '80%',
    borderRadius: scale(20),
    paddingVertical: verticalScale(21),
    paddingHorizontal: scale(19),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: solidBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 14,
  },
  cardInfoDate: {
    color: white,
    fontFamily: 'AvenirBold',
    fontSize: 16,
    lineHeight: verticalScale(21),
    position: 'absolute',
    top: verticalScale(21),
    left: scale(18),
  },
  cardInfoPoints: {
    color: white,
    fontFamily: 'AvenirBold',
    fontSize: 32,
    lineHeight: verticalScale(43),
  },
});
