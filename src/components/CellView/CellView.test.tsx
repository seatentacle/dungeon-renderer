import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import CellView from './CellView';
import {
  Cell,
  CellFace,
} from './CellView.styled';
import { cellSide } from './CellView.types';

const renderComponent = () => shallow(
  <CellView
    position={{
      x: 0,
      y: 0,
    }}
  />
);

describe('<CellView />', () => {
  describe('sides properties', () => {
    it('should return an empty value if there are no walls', () => {
      const component = renderComponent();
  
      expect(component.children().exists()).toBeFalsy();
    });

    it('it should have the number of children equal to the length of the array', () => {
      const sides = [cellSide.FRONT];
      const component = renderComponent();

      component.setProps({ sides });
      expect(component.find(Cell).exists).toBeTruthy();
      expect(component.find(Cell).children()).toHaveLength(sides.length);
    });

    it('it should have children with the correct property of side', () => {
      const sides = [
        cellSide.FRONT,
        cellSide.BACK,
        cellSide.BOTTOM,
      ];
      const component = renderComponent();

      component.setProps({ sides });
      expect(component.find(Cell).childAt(0).props().side).toBe(cellSide.FRONT);
      expect(component.find(Cell).childAt(1).props().side).toBe(cellSide.BACK);
      expect(component.find(Cell).childAt(2).props().side).toBe(cellSide.BOTTOM);
    })
  });

  describe('position property', () => {
    it('should have a cell component with the correct position property', () => {
      const sides = [cellSide.FRONT];
      const position = { x: 3, y: 2 };
      const component = renderComponent();

      component.setProps({ sides })
      expect(component.find(Cell).props().x).toEqual(0);
      expect(component.find(Cell).props().y).toEqual(0);

      component.setProps({ position });
      expect(component.find(Cell).props().x).toEqual(3);
      expect(component.find(Cell).props().y).toEqual(2);
    });
  });

  describe('styled components', () => {
    it('should have the correct transform styles for the x and y position props', () => {
      const component = shallow(
        <Cell
          x={ 0 }
          y={ 0 }
        />
      );
    
      expect(component).toHaveStyleRule('transform', 'translate3d(-37.5rem,0,-37.5rem)');
    
      component.setProps({ x: 3, y: 2 });
      expect(component).toHaveStyleRule('transform', 'translate3d(0rem,0,-12.5rem)');
    });
    
    
    it('should have the correct styles for the side properties', () => {
      const component = shallow(
        <CellFace side={ cellSide.FRONT } />
      );
    
      expect(component).toHaveStyleRule('height', '7.5rem');
      expect(component).toHaveStyleRule('transform', `rotate3d(0,0,0,0) translate3d(0,0,6.25rem) scale3d(1,1,1)`);
      expect(component).toHaveStyleRule('background-color', 'hsla(0,100%,50%,0.5)');
    
      component.setProps({ side: cellSide.BOTTOM });
      expect(component).toHaveStyleRule('height', '12.5rem');
      expect(component).toHaveStyleRule('transform', `rotate3d(-1,0,0,90deg) translate3d(0,0,1.25rem) scale3d(1,-1,1)`);
      expect(component).toHaveStyleRule('background-color', 'hsla(300,100%,50%,0.5)');
    });
  });
});
