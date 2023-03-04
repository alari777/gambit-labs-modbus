import { calcLong } from '@/pages/api/utils/calcLong/calcLong';
import { calcReal } from '@/pages/api/utils/calcReal/calcReal';
import { calcInt8 } from '@/pages/api/utils/calcInt8/calcInt8';

export function responseRegistersValues(): number[] {
  return [
    calcReal(1),
    calcReal(3),
    calcReal(5),
    calcReal(7),
    calcLong(9),
    calcLong(13),
    calcLong(17),
    calcLong(21),
    calcLong(25),
    calcLong(29),
    calcReal(33),
    calcReal(35),
    calcReal(37),
    calcReal(39),
    calcReal(41),
    calcReal(43),
    calcReal(45),
    calcReal(47),
    calcReal(77),
    calcReal(79),
    calcReal(81),
    calcReal(83),
    calcReal(85),
    calcReal(87),
    calcReal(89),
    calcInt8(92, 0),
    calcInt8(92, 1),
    calcReal(97),
    calcReal(99),
  ];
}
