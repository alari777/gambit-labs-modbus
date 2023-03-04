import { calcLong } from '@/pages/api/utils/calcLong/calcLong';
import { calcReal } from '@/pages/api/utils/calcReal/calcReal';
import { calcInt8 } from '@/pages/api/utils/calcInt8/calcInt8';

type ModbusRegisterType = {
  register: string;
  number: number;
  variableName: string;
  value: number;
  note: string;
};

export function responseRegistersValues(): ModbusRegisterType[] {
  return [
    {
      register: '0001-0002',
      number: 2,
      variableName: 'Flow Rate',
      value: calcReal(1),
      note: 'Unit: m3/h',
    },
    {
      register: '0003-0004',
      number: 2,
      variableName: 'Energy Flow Rate',
      value: calcReal(3),
      note: 'Unit: GJ/h',
    },
    {
      register: '0005-0006',
      number: 2,
      variableName: 'Velocity',
      value: calcReal(5),
      note: 'Unit: m/s',
    },
    {
      register: '0007-0008',
      number: 2,
      variableName: 'Fluid sound speed',
      value: calcReal(7),
      note: 'Unit: m/s',
    },
    {
      register: '0009-0010',
      number: 2,
      variableName: 'Positive accumulator',
      value: calcLong(9),
      note: 'Unit is selected by M31, and depends on totalizer multiplier',
    },
    {
      register: '0013-0014',
      number: 2,
      variableName: 'Negative accumulator',
      value: calcLong(13),
      note: 'Long is a signed 4-byte integer, lower byte first',
    },
    {
      register: '0017-0018',
      number: 2,
      variableName: 'Positive energy accumulator',
      value: calcLong(17),
      note: '',
    },
    {
      register: '0021-0022',
      number: 2,
      variableName: 'Negative energy accumulator',
      value: calcLong(21),
      note: '',
    },
    {
      register: '0025-0026',
      number: 2,
      variableName: 'Net accumulator',
      value: calcLong(25),
      note: '',
    },
    {
      register: '0029-0030',
      number: 2,
      variableName: 'Net energy accumulator',
      value: calcLong(29),
      note: '',
    },
    {
      register: '0033-0034',
      number: 2,
      variableName: 'Temperature #1/inlet',
      value: calcReal(33),
      note: 'Unit: C',
    },
    {
      register: '0035-0036',
      number: 2,
      variableName: 'Temperature #2/inlet',
      value: calcReal(35),
      note: 'Unit: C',
    },
    {
      register: '0037-0038',
      number: 2,
      variableName: 'Analog input A13',
      value: calcReal(37),
      note: '',
    },
    {
      register: '0039-0040',
      number: 2,
      variableName: 'Analog input A14',
      value: calcReal(39),
      note: '',
    },
    {
      register: '0041-0042',
      number: 2,
      variableName: 'Analog input A15',
      value: calcReal(41),
      note: '',
    },
    {
      register: '0043-0044',
      number: 2,
      variableName: 'Current input at A13',
      value: calcReal(43),
      note: 'In unit mA',
    },
    {
      register: '0045-0046',
      number: 2,
      variableName: 'Current input at A14',
      value: calcReal(45),
      note: 'In unit mA',
    },
    {
      register: '0047-0048',
      number: 2,
      variableName: 'Current input at A15',
      value: calcReal(47),
      note: 'In unit mA',
    },
    {
      register: '0077-0078',
      number: 2,
      variableName: 'PT100 resistance of inlet',
      value: calcReal(77),
      note: 'In unit Ohm',
    },
    {
      register: '0079-0080',
      number: 2,
      variableName: 'PT100 resistance of outlet',
      value: calcReal(79),
      note: 'In unit Ohm',
    },
    {
      register: '0081-0082',
      number: 2,
      variableName: 'Total travel time',
      value: calcReal(81),
      note: 'In unit Micro-second',
    },
    {
      register: '0083-0084',
      number: 2,
      variableName: 'Delta travel time',
      value: calcReal(83),
      note: 'In unit Nino-second',
    },
    {
      register: '0085-0086',
      number: 2,
      variableName: 'Upstream travel time',
      value: calcReal(85),
      note: 'In unit Micro-second',
    },
    {
      register: '0087-0088',
      number: 2,
      variableName: 'Downstream travel time',
      value: calcReal(87),
      note: 'In unit Micro-second',
    },
    {
      register: '0089-0090',
      number: 2,
      variableName: 'Output current',
      value: calcReal(89),
      note: 'In unit mA',
    },
    {
      register: '0092',
      number: 1,
      variableName: 'Working step',
      value: calcInt8(92, 0),
      note: '',
    },
    {
      register: '0092',
      number: 1,
      variableName: 'Signal Quality',
      value: calcInt8(92, 1),
      note: '',
    },
    {
      register: '0097-0098',
      number: 2,
      variableName:
        'The rate of the measured travel time by the calculated travel time.',
      value: calcReal(97),
      note: 'Normal 100+-3%',
    },
    {
      register: '0099-0100',
      number: 2,
      variableName: 'Reynolds number ',
      value: calcReal(99),
      note: '',
    },
  ];
}
