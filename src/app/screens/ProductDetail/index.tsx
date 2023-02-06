import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useRouteWithParams from '@hooks/useRouteWithParams';
import withSafeArea from '@components/SafeAreaWrapper';
import CustomButton from '@components/CustomButton';
import useTranslations from '@hooks/useTranslations';
import Routes from '@constants/routes';
import styles from '@screens/ProductDetail/styles';
import {TRANSLATE_KEY} from '@screens/ProductDetail/i18n';
import testIds from '@screens/ProductDetail/testIds';

function ProductDetail() {
  const {translate} = useTranslations();
  const {goBack} = useNavigation();

  const {createdAt, image, points, product} =
    useRouteWithParams<Routes.ProductDetail>().params || {
      createdAt: translate(`${TRANSLATE_KEY}:INVALID_DATE`),
      image: undefined,
      points: 0,
      product: translate(`${TRANSLATE_KEY}:INVALID_PRODUCT_NAME`),
    };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.productTitle} testID={testIds.productName}>
          {product}
        </Text>
      </View>
      <View style={styles.layoutContainer}>
        <View style={styles.cardContainer}>
          <Image
            source={{uri: image}}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>
            {translate(`${TRANSLATE_KEY}:PRODUCT_DETAIL_LABEL`)}
          </Text>
          <Text style={styles.detailDate} testID={testIds.buyDate}>
            {`${translate(`${TRANSLATE_KEY}:BUY_DATE`)} ${createdAt}`}
          </Text>
          <Text style={styles.detailAccumulated}>
            {translate(`${TRANSLATE_KEY}:ACUMULATED_POINTS_LABEL`)}
          </Text>
          <Text
            style={styles.detailsPoints}
            testID={testIds.pointsCount}>{`${points} ${translate(
            `${TRANSLATE_KEY}:POINT_COUNT`,
          )}`}</Text>
        </View>
      </View>
      <View style={styles.buttonLayoutContainer}>
        <CustomButton
          testID={testIds.confirmButton}
          title={`${TRANSLATE_KEY}:CONFIRM_BUTTON`}
          containerStyle={styles.buttonContainer}
          onPress={goBack}
        />
      </View>
    </View>
  );
}

export default withSafeArea(Routes.ProductDetail, ProductDetail);
