import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '@utils/responsiveUtils';
import {gray, white} from '@constants/colors';
import {IS_IOS} from '@constants/device';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  labelText: {
    color: gray,
    fontFamily: 'AvenirBold',
    fontSize: 14,
    lineHeight: verticalScale(20),
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
