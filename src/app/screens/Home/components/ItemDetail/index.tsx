import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ArrowIcon} from '@components/Icons';
import {getDateFormatted} from '@screens/Home/utils';
import styles from '@screens/Home/styles';

interface ItemDetailProps {
  image: string;
  createdAt: string;
  product: string;
  isRedemption: boolean;
  points: number;
}

function ItemDetail({
  image,
  createdAt,
  product,
  isRedemption,
  points,
}: ItemDetailProps) {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>{product}</Text>
        <Text style={styles.descriptionDate}>
          {getDateFormatted(createdAt)}
        </Text>
      </View>
      <View style={styles.pointAndSelectOptionContainer}>
        <Text style={styles.pointsText}>
          <Text style={!isRedemption ? styles.pointPlus : styles.pointNegative}>
            {!isRedemption ? '+' : '-'}
          </Text>
          <Text>{points}</Text>
        </Text>
        <View style={styles.iconContainer}>
          <ArrowIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(ItemDetail);
