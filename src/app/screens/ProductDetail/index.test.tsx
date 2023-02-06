import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import TestWrapper from '@mocks/TestWrapper';
import ProductDetailScreen from '@screens/ProductDetail';
import testIds from '@screens/ProductDetail/testIds';
import {MOCK_DATA} from '@mocks/mockData';

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedGoBack,
    }),
    useRoute: () => ({
      params: {
        createdAt: '26 de enero, 2019',
        image: MOCK_DATA[0].image,
        points: MOCK_DATA[0].points,
        product: MOCK_DATA[0].product,
      },
    }),
  };
});

describe('ProductDetail Screen', () => {
  const renderComponent = () => {
    render(
      <TestWrapper>
        <ProductDetailScreen />
      </TestWrapper>,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('You should be able to get the product name and run the goback function.', async () => {
    renderComponent();
    expect(screen.queryByText(MOCK_DATA[0].product)).toBeTruthy();
    fireEvent.press(screen.queryByTestId(testIds.confirmButton));
    await waitFor(() => {
      expect(mockedGoBack).toBeCalledTimes(1);
    });
  });
});
