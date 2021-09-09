import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountryList from './CountryList';

const initialState = {
  covidReducer: {
    countries: {
      countries: [
        {
          name: 'Mexico',
        },
      ],
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
      <CountryList />
    </Provider>
  );

  // Assert
  test('Testing List component render Mexico', () => {
    component.getByText('Mexico');
  });
});
