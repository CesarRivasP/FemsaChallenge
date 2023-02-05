import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useRouteWithParams from '@hooks/useRouteWithParams';
import Routes from '@constants/routes';
import withSafeArea from '@components/SafeAreaWrapper';
import useTranslations from '@hooks/useTranslations';
import styles from '@screens/ProductDetail/styles';
import {TRANSLATE_KEY} from '@screens/ProductDetail/i18n';

function ProductDetail() {
  const {translate} = useTranslations();
  const {goBack} = useNavigation();
  const {createdAt, image, points, product} =
    useRouteWithParams<Routes.ProductDetail>().params || {
      createdAt: 'Fecha Invalida',
      image: undefined,
      points: 0,
      product: 'Nombre del Producto',
    };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.productTitle}>{product}</Text>
      </View>
      <View style={styles.layoutContainer}>
        <View style={styles.cardContainer}>
          <Image source={{uri: image}} style={styles.productImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>
            {translate(`${TRANSLATE_KEY}:PRODUCT_DETAIL_LABEL`)}
          </Text>
          <Text style={styles.detailDate}>
            {`${translate(`${TRANSLATE_KEY}:BUY_DATE`)} ${createdAt}`}
          </Text>
          <Text style={styles.detailAccumulated}>
            {translate(`${TRANSLATE_KEY}:ACUMULATED_POINTS_LABEL`)}
          </Text>
          <Text style={styles.detailsPoints}>{`${points} ${translate(
            `${TRANSLATE_KEY}:POINT_COUNT`,
          )}`}</Text>
        </View>
      </View>
      <View style={styles.buttonLayoutContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonContainer}
          onPress={goBack}>
          <Text style={styles.buttonText}>
            {translate(`${TRANSLATE_KEY}:CONFIRM_BUTTON`)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withSafeArea(Routes.ProductDetail, ProductDetail);
