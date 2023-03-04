import { Modbus } from '../../classes/Modbus.class';

export function calcReal(index: number): number {
  const modbus = Modbus.init();
  // Create `arraybuffer` for 4 bytes.
  // It equals 32 bits: 16 bits for one register and 16 bits for second register
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  if (modbus.data) {
    // Set the first value of register
    view.setUint16(0, modbus.data[index], true);
    // Set the second value of register
    view.setUint16(2, modbus.data[index + 1], true);
    //read the buffer as float and round to 5 digits
    return parseFloat(view.getFloat32(0, true).toFixed(15));
  }
  return 0;
}
