import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GlobalCard from './GlobalCard';

const initialState = {
  covidReducer: {
    worldData: {
      confirmed: {
        value: 1000,
      },
      deaths: {
        value: 2000,
      },
      lastUpdate: new Date(),
    },
  },
};
const mockStore = configureStore();
let store;

describe('Test GlobalCard component', () => {
  // Arrange
  store = mockStore(initialState);

  const component = render(
    <Provider store={store}>
      <GlobalCard />
    </Provider>,
  );

  // Assert
  test('Testing Button component render confirmed', () => {
    component.getByText(new Date().toDateString());
  });
});
