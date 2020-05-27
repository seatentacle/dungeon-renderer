import * as React from 'react';
import {
  shallow,
  ShallowWrapper,
} from 'enzyme';
import 'jest-styled-components';

import { cameraDirection } from 'constants/directions';
import CameraView from './index';
import { Camera } from './CameraView.styled';
import { cells } from 'lib/camera/__mocks__/map.template.json';
import { Cell } from 'lib/camera';
import { CameraViewProps } from './CameraView.types';

const renderComponent = (): ShallowWrapper<CameraViewProps> => shallow(
  <CameraView
    position={{ x: 3, y: 3 }}
    cells={ cells as Array<Cell> }
  />
);

describe('<CellView />', () => {
  describe('', () => {
    it('should have the correct children count for given properties camera directions', () => {
      const component = renderComponent();
  
      expect(component.find(Camera).children()).toHaveLength(16);
  
      component.setProps({ direction: cameraDirection.EAST });
      expect(component.find(Camera).children()).toHaveLength(10);
  
      component.setProps({ direction: cameraDirection.SOUTH });
      expect(component.find(Camera).children()).toHaveLength(11);
  
      component.setProps({ direction: cameraDirection.WEST });
      expect(component.find(Camera).children()).toHaveLength(9);
    });
  
    it('should have the correct children count for given properties camera positions', () => {
      const component = renderComponent();
  
      expect(component.find(Camera).children()).toHaveLength(16);
  
      component.setProps({ position: { x: 1, y: 1 } });
      expect(component.find(Camera).children()).toHaveLength(6);
  
      component.setProps({ position: { x: 1, y: 0 } });
      expect(component.find(Camera).children()).toHaveLength(3);
    });
  });

  describe('styled components', () => {
    it('should have the correct transform styles for the direction property', () => {
      const component = shallow(<Camera direction={ cameraDirection.NORTH } />);

      expect(component).toHaveStyleRule('transform', 'rotate3d(0,1,0,0deg) translate3d(6.25rem,0,0)');

      component.setProps({ direction: cameraDirection.SOUTH });
      expect(component).toHaveStyleRule('transform', 'rotate3d(0,1,0,180deg) translate3d(6.25rem,0,0)');
    });
  });
});
