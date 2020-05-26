import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Cube } from './App.styled';

const renderComponent = () => shallow(<App />);

it('should have the right faces count', () => {
  const component = renderComponent();

  expect(component.find(Cube).children()).toHaveLength(6);
});
