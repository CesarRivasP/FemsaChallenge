import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '@utils/responsiveUtils';
import {blue, gray, white, green, red} from '@constants/colors';
import {IS_IOS} from '@constants/device';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
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
  bottomContainer: {
    flex: 0.65,
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 0.92,
    paddingBottom: verticalScale(4),
  },
  labelListText: {
    marginBottom: verticalScale(6),
  },
  listCardContainer: {
    flex: 1,
    backgroundColor: white,
    borderRadius: scale(20),
    paddingVertical: verticalScale(15),
  },
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
    backgroundColor: blue,
    width: '48%',
    height: verticalScale(50),
    borderRadius: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  allButtonContainer: {
    backgroundColor: blue,
    width: '100%',
    height: verticalScale(50),
    borderRadius: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: white,
    fontFamily: 'AvenirBold',
    fontSize: 16,
    lineHeight: verticalScale(20),
  },
  emptyContainer: {
    height: verticalScale(240),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: gray,
    fontFamily: 'AvenirMedium',
    fontSize: 16,
  },
});
