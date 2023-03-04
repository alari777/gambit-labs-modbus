export type FormFetchingDataType = {
  date: string;
  data: ModbusRegisterType[];
};

export type ModbusRegisterType = {
  register: string;
  number: number;
  variableName: string;
  value: number;
  note: string;
};
