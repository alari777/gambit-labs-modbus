import { FormFetchingDataType } from '@/pages/api/types/FormFetchingDataType';
import { Modbus } from '@/pages/api/classes/Modbus.class';

export function formFetchingData(str: string): FormFetchingDataType {
  const modbus = Modbus.init();
  const arr: string[] = str.split('\n');
  const date = arr[0];
  arr.pop();
  modbus.data = arr.map((value) => {
    return Number(value.split(':')[1]);
  });

  return {
    date,
    data: modbus.data,
  };
}
