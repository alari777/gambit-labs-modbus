import { Modbus } from '../../classes/Modbus.class';
import { calcReal } from './calcReal';

describe('testing function calcReal()', () => {
  it('should return, 0, 61', () => {
    const modbus = Modbus.init();
    modbus.data = [15568, 16611];
    const result = calcReal(0);
    expect(result).toBe(7.101173400878906);
  });
});
