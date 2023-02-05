import React, {memo} from 'react';
import {View} from 'react-native';
import CustomButton from '@components/CustomButton';
import {ListFilters} from '@screens/Home/constants';
import styles from '@screens/Home/styles';
import {TRANSLATE_KEY} from '@screens/Home/i18n';
import testIds from '@screens/Home/testIds';

interface FooterProps {
  isAllFilter: boolean;
  handleChangeListFilter: (filter: ListFilters) => void;
}

function Footer({isAllFilter, handleChangeListFilter}: FooterProps) {
  let renderSelectedButton = null;

  if (!isAllFilter) {
    renderSelectedButton = (
      <CustomButton
        title={`${TRANSLATE_KEY}:ALL_BUTTON`}
        testID={testIds.allButton}
        containerStyle={styles.allButtonContainer}
        onPress={() => handleChangeListFilter(ListFilters.ALL)}
      />
    );
  } else {
    renderSelectedButton = (
      <>
        <CustomButton
          title={`${TRANSLATE_KEY}:WINNING_FILTER_BUTTON`}
          testID={testIds.winningButton}
          containerStyle={styles.paralelsButtonContainer}
          onPress={() => handleChangeListFilter(ListFilters.WINNING)}
        />
        <CustomButton
          title={`${TRANSLATE_KEY}:REDEEMED_FILTER_BUTTON`}
          testID={testIds.redeemedButton}
          containerStyle={styles.paralelsButtonContainer}
          onPress={() => handleChangeListFilter(ListFilters.REDEEMED)}
        />
      </>
    );
  }
  return (
    <View
      style={[
        styles.buttonsContainer,
        !isAllFilter
          ? styles.singleButtonContainer
          : styles.multipleButtonContainer,
      ]}>
      {renderSelectedButton}
    </View>
  );
}

export default memo(Footer);
