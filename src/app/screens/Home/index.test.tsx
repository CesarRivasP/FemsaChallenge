import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import mockAxios from 'jest-mock-axios';
import TestWrapper from '@mocks/TestWrapper';
import HomeScreen from '@screens/Home';
import testIds from '@screens/Home/testIds';
import {MOCK_DATA} from '@mocks/mockData';
import {getDateFormatted} from '@screens/Home/utils';

describe('Home Screen', () => {
  const renderComponent = () =>
    render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
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

  it('By not passing a parameter to the function, the indicated message should be obtained', async () => {
    expect(getDateFormatted()).toBe('Fecha invalida');
  });
});
