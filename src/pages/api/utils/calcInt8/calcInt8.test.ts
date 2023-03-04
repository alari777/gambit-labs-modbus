import { calcInt8 } from './calcInt8';
import { Modbus } from '../../classes/Modbus.class';

describe('testing function calcInt8()', () => {
  it('should return, 0, 61', () => {
    const modbus = Modbus.init();
    modbus.data = [829];
    const result = calcInt8(0, 0);
    expect(result).toBe(61);
  });

  it('should return, 1, 3', () => {
    const modbus = Modbus.init();
    modbus.data = [829];
    const result = calcInt8(0, 1);
    expect(result).toBe(3);
  });
});
