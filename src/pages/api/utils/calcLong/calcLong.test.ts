import { Modbus } from '../../classes/Modbus.class';
import { calcLong } from './calcLong';

describe('testing function calcLong()', () => {
  it('should return, 0, 61', () => {
    const modbus = Modbus.init();
    modbus.data = [65480, 65535];
    const result = calcLong(0);
    expect(result).toBe(-56);
  });
});
