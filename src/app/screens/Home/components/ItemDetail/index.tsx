import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowIcon} from '@components/Icons';
import {getDateFormatted} from '@screens/Home/utils';
import Routes from '@constants/routes';
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
  const {navigate} = useNavigation();

  const handlePress = () =>
    navigate(Routes.ProductDetail, {createdAt, image, points});

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
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
