import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '@utils/responsiveUtils';
import {
  backgroundGray,
  gray,
  lightBlue,
  white,
  solidBlack,
} from '@constants/colors';
import {IS_IOS} from '@constants/device';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundGray,
  },
  headerContainer: {
    backgroundColor: lightBlue,
    height: verticalScale(70),
    paddingHorizontal: scale(20),
    justifyContent: 'center',
  },
  productTitle: {
    fontFamily: 'AvenirBold',
    fontSize: 24,
    lineHeight: verticalScale(20),
  },
  productImage: {
    width: scale(200),
    height: scale(200),
  },
  layoutContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  cardContainer: {
    backgroundColor: white,
    width: '100%',
    height: verticalScale(280),
    marginVertical: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: verticalScale(10),
    shadowColor: solidBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 14,
  },
  detailsContainer: {},
  detailLabel: {
    color: gray,
    fontFamily: 'AvenirBold',
    fontSize: 14,
    lineHeight: verticalScale(20),
    marginVertical: verticalScale(6),
  },
  detailDate: {
    fontFamily: 'AvenirBold',
    fontSize: 16,
    lineHeight: verticalScale(20),
    marginVertical: verticalScale(6),
  },
  detailAccumulated: {
    color: gray,
    fontFamily: 'AvenirBold',
    fontSize: 14,
    lineHeight: verticalScale(20),
    marginVertical: verticalScale(6),
  },
  detailsPoints: {
    fontFamily: 'AvenirBold',
    fontSize: 24,
    lineHeight: verticalScale(20),
    marginVertical: verticalScale(20),
  },
  buttonLayoutContainer: {
    height: verticalScale(70),
    paddingHorizontal: scale(20),
    justifyContent: IS_IOS ? 'center' : 'flex-start',
  },
  buttonContainer: {
    width: '100%',
  },
});
