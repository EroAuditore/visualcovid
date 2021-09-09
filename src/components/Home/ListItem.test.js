import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListItem from './ListItem';

describe('Test Button component', () => {
  // Arrange

  const country = {
    value: 'Mexico',
    name: 'Mexico',
  };
  const i = 0;
  const goDetail = jest.fn();
  // Act

  const component = render(
    <ListItem
      key={country.name}
      contry={country}
      goDetail={goDetail}
      index={i}
    />,
  );

  // Assert
  test('Testing ListItem component render', () => {
    component.getByText('Mexico');
  });
});
