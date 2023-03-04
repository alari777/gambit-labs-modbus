import { Modbus } from '@/pages/api/classes/Modbus.class';

export function calcInt8(index: number, byte: 0 | 1): number {
  const modbus = Modbus.init();
  // Create `arraybuffer` for 2 bytes.
  // It equals 16 bits for one register
  const buffer = new ArrayBuffer(2);
  const view = new DataView(buffer);
  if (modbus.data) {
    // Set the first value of register
    view.setUint16(0, modbus.data[index], true);
    // Byte has to be `0` or `1`
    return view.getUint8(byte);
  }
  return 0;
}
