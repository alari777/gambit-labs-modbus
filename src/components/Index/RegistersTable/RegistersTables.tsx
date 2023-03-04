import { FC } from 'react';

const TripsTable: FC = () => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Register</th>
            <th scope='col'>Number of bytes</th>
            <th scope='col'>Variable name</th>
            <th scope='col'>Value</th>
            <th scope='col'>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr key='testtest'>
            <td>1</td>
            <td>0001-0002</td>
            <td>2</td>
            <td>Flow Rate</td>
            <td>777</td>
            <td>Unit: m3/h </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TripsTable;
