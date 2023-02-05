import React, {useCallback, useMemo} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import withSafeArea from '@components/SafeAreaWrapper';
import useTranslations from '@hooks/useTranslations';
import ItemDetail from '@screens/Home/components/ItemDetail';
import {data, ListProps} from '@screens/Home/constants';
import styles from '@screens/Home/styles';
import {TRANSLATE_KEY} from '@screens/Home/i18n';

function Home() {
  const {translate} = useTranslations();

  const totalPoints = useMemo(() => {
    let points = 0;
    data.forEach(element => {
      if (element?.is_redemption) {
        points -= element?.points || 0;
      } else {
        points += element?.points || 0;
      }
    });
    return points;
  }, []);

  const handleKeyExtractor = useCallback(
    (item: ListProps['item']) => item?.id,
    [],
  );

  const handleRenderItems = useCallback(
    ({item, index}: ListProps) => (
      <ItemDetail
        key={`${item.id}-${index}`}
        createdAt={item.createdAt}
        image={item.image}
        isRedemption={item.is_redemption}
        points={item.points}
        product={item.product}
      />
    ),
    [],
  );

  const handleShowEmptyMessage = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {translate(`${TRANSLATE_KEY}:EMPTY_MESSAGE`)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {translate(`${TRANSLATE_KEY}:WELCOME_TITLE`)}
          </Text>
          <Text style={styles.titleUsername}>{'Ruben Rodriguez'}</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.labelText}>
            {translate(`${TRANSLATE_KEY}:USER_POINTS_LABEL`)}
          </Text>
          <View style={styles.cardInfoContainer}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoDate}>{'Diciembre'}</Text>
              <Text style={styles.cardInfoPoints}>{`${totalPoints} pts`}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.listContainer}>
          <Text style={[styles.labelText, styles.labelListText]}>
            {translate(`${TRANSLATE_KEY}:USER_MOVEMENTS_LABEL`)}
          </Text>
          <View style={styles.listCardContainer}>
            <FlatList
              keyExtractor={handleKeyExtractor}
              data={data}
              renderItem={handleRenderItems}
              ListEmptyComponent={handleShowEmptyMessage}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.allButtonContainer}>
            <Text style={styles.buttonText}>
              {translate(`${TRANSLATE_KEY}:ALL_BUTTON`)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default withSafeArea(Home);
