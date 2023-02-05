import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import mockAxios from 'jest-mock-axios';
import HomeScreen from '@screens/Home';
import testIds from '@screens/Home/testIds';

describe('Home Screen', () => {
  const MOCK_DATA = [
    {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '1',
    },
    {
      createdAt: '2022-12-09T17:02:51.904Z',
      product: 'Recycled Plastic Tuna',
      points: 9984,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '2',
    },
  ];
  const renderComponent = () =>
    render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('It should be able to validate that when there is no content, the message is displayed and when there is, all actions can be executed.', async () => {
    mockAxios.get.mockResolvedValue({
      data: MOCK_DATA,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });
    renderComponent();
    expect(screen.getByTestId(testIds.emptyContent)).toBeTruthy();
    await waitFor(() => {
      expect(
        screen.queryByText(`${MOCK_DATA[0].points - MOCK_DATA[1].points} pts`),
      ).toBeOnTheScreen();
      expect(screen.queryByTestId(testIds.emptyContent)).toBeFalsy();
      expect(screen.queryByText(MOCK_DATA[1].product)).toBeTruthy();
      expect(screen.queryByText(MOCK_DATA[0].product)).toBeTruthy();
    });
    fireEvent.press(screen.getByTestId(testIds.winningButton));
    await waitFor(() => {
      expect(screen.queryByText(MOCK_DATA[0].product)).toBeTruthy();
      expect(screen.queryByText(MOCK_DATA[1].product)).toBeFalsy();
    });
    fireEvent.press(screen.getByTestId(testIds.allButton));
    fireEvent.press(screen.getByTestId(testIds.redeemedButton));
    await waitFor(() => {
      expect(screen.queryByText(MOCK_DATA[0].product)).toBeFalsy();
      expect(screen.queryByText(MOCK_DATA[1].product)).toBeTruthy();
    });
  });

  it('It should show the message that there is no content when a status other than 200 comes', async () => {
    mockAxios.get.mockResolvedValue({
      data: [],
      status: 201,
      statusText: '',
      headers: {},
      config: {},
    });
    renderComponent();
    await waitFor(() => {
      expect(screen.getByTestId(testIds.emptyContent)).toBeTruthy();
    });
  });

  it('It should show the message that there is no content when there is a reject of the data request.', async () => {
    mockAxios.get.mockRejectedValueOnce({
      data: [],
      status: 400,
      statusText: '',
      headers: {},
      config: {},
    });
    renderComponent();
    await waitFor(() => {
      expect(screen.getByTestId(testIds.emptyContent)).toBeTruthy();
    });
  });
});
