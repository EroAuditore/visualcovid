import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardComponent from './CardComponent';

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

describe('Test CardComponent component', () => {
  // Arrange
  store = mockStore(initialState);
  const data = {
    confirmed: {
      value: '1000',
    },
    deaths: {
      value: '1000',
    },
    lastUpdate: new Date(),
  };

  const component = render(
    <Provider store={store}>
      <CardComponent country={data} />
    </Provider>
  );

  // Assert
  test('Testing CardComponent component render Date', () => {
    component.getByText(new Date().toDateString());
  });
});
