import React, {memo} from 'react';
import {Text, View} from 'react-native';
import useTranslations from '@hooks/useTranslations';
import styles from '@screens/Home/styles';
import {TRANSLATE_KEY} from '@screens/Home/i18n';

interface HeaderProps {
  month: string;
  name: string;
  totalPoints: number;
}

function Header({month, name, totalPoints}: HeaderProps) {
  const {translate} = useTranslations();
  return (
    <View style={styles.headContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          {translate(`${TRANSLATE_KEY}:WELCOME_TITLE`)}
        </Text>
        <Text style={styles.titleUsername}>{name}</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.labelText}>
          {translate(`${TRANSLATE_KEY}:USER_POINTS_LABEL`)}
        </Text>
        <View style={styles.cardInfoContainer}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardInfoDate}>{month}</Text>
            <Text style={styles.cardInfoPoints}>{`${totalPoints} pts`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default memo(Header);
