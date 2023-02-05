import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import withSafeArea from '@components/SafeAreaWrapper';
import useTranslations from '@hooks/useTranslations';
import Header from '@screens/Home/components/Header';
import ItemDetail from '@screens/Home/components/ItemDetail';
import Footer from '@screens/Home/components/Footer';
import {ListProps, ListData, ListFilters} from '@screens/Home/constants';
import ProductsService from '@services/index';
import styles from '@screens/Home/styles';
import {TRANSLATE_KEY} from '@screens/Home/i18n';
import Routes from '@constants/routes';

function Home() {
  const [data, setData] = useState<ListData[]>([]);
  const [listFilter, setListFilter] = useState<ListFilters>(ListFilters.ALL);

  const isAllFilter: boolean = listFilter === ListFilters.ALL;

  const {translate} = useTranslations();

  const handleGetServices = useCallback(async () => {
    try {
      const response = await ProductsService.productsList();
      if (response.status !== 200) {
        return;
      }
      setData([...response.data]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    handleGetServices();
  }, [handleGetServices]);

  const productsList = useMemo(() => {
    let products = [...data];
    if (listFilter === ListFilters.WINNING) {
      products = products.filter(product => !product.is_redemption);
    }
    if (listFilter === ListFilters.REDEEMED) {
      products = products.filter(product => product.is_redemption);
    }
    return products;
  }, [listFilter, data]);

  const totalPoints = useMemo(() => {
    let points = 0;
    data?.forEach(element => {
      if (element?.is_redemption) {
        points -= element?.points || 0;
      } else {
        points += element?.points || 0;
      }
    });
    return points;
  }, [data]);

  const handleChangeListFilter = (filter: ListFilters) => setListFilter(filter);

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
      <Header
        month="Diciembre"
        name="Ruben Rodriguez"
        totalPoints={totalPoints}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.listContainer}>
          <Text style={[styles.labelText, styles.labelListText]}>
            {translate(`${TRANSLATE_KEY}:USER_MOVEMENTS_LABEL`)}
          </Text>
          <View style={styles.listCardContainer}>
            <FlatList
              keyExtractor={handleKeyExtractor}
              data={productsList}
              renderItem={handleRenderItems}
              ListEmptyComponent={handleShowEmptyMessage}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <Footer
          isAllFilter={isAllFilter}
          handleChangeListFilter={handleChangeListFilter}
        />
      </View>
    </View>
  );
}

export default withSafeArea(Routes.Home, Home);
