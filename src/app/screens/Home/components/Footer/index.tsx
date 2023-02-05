import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useTranslations from '@hooks/useTranslations';
import {ListFilters} from '@screens/Home/constants';
import styles from '@screens/Home/styles';
import {TRANSLATE_KEY} from '@screens/Home/i18n';

interface FooterProps {
  isAllFilter: boolean;
  handleChangeListFilter: (filter: ListFilters) => void;
}

function Footer({isAllFilter, handleChangeListFilter}: FooterProps) {
  const {translate} = useTranslations();

  let renderSelectedButton = null;

  if (!isAllFilter) {
    renderSelectedButton = (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.allButtonContainer}
        onPress={() => handleChangeListFilter(ListFilters.ALL)}>
        <Text style={styles.buttonText}>
          {translate(`${TRANSLATE_KEY}:ALL_BUTTON`)}
        </Text>
      </TouchableOpacity>
    );
  } else {
    renderSelectedButton = (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.paralelsButtonContainer}
          onPress={() => handleChangeListFilter(ListFilters.WINNING)}>
          <Text style={styles.buttonText}>
            {translate(`${TRANSLATE_KEY}:WINNING_FILTER_BUTTON`)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.paralelsButtonContainer}
          onPress={() => handleChangeListFilter(ListFilters.REDEEMED)}>
          <Text style={styles.buttonText}>
            {translate(`${TRANSLATE_KEY}:REDEEMED_FILTER_BUTTON`)}
          </Text>
        </TouchableOpacity>
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
