import { FC, FormEvent, useState } from 'react';
import { ModbusRegisterType } from '@/pages/api/types/FormFetchingDataType';
import styles from '@/components/Index/RegistersTable/RegistersTable.module.scss';

const RegistersTable: FC = () => {
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [registersDate, setRegistersDate] = useState<string>('');
  const [registersValues, setRegistersValues] =
    useState<ModbusRegisterType[]>();

  const getFeed = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setClassSpinner(true);
    try {
      const response = await fetch('/api/v1/feed', {
        method: 'GET',
      });
      if (response.status === 200) {
        const json = await response.json();
        const { date, data } = json;
        setRegistersValues(data);
        setRegistersDate(date);
      }
    } catch (err) {}
    setClassSpinner(false);
  };

  return (
    <>
      <form onSubmit={getFeed}>
        <div className={styles.feed}>
          <div className='form-row'>
            <div className='col-md-9'>
              <button type='submit' className='btn btn-primary mt-3'>
                {classSpinner && (
                  <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                )}
                Feed registers
              </button>
            </div>
          </div>
        </div>
      </form>

      {registersDate && <div>Date: {registersDate}</div>}
      <div className='col-auto'>
        <table className='table table-striped table-bordered table-responsive'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Register</th>
              <th scope='col'>Variable name</th>
              <th scope='col'>Value</th>
              <th scope='col'>Note</th>
            </tr>
          </thead>
          <tbody>
            {registersValues &&
              registersValues.map(
                (registerValue: ModbusRegisterType, index: number) => (
                  <tr key={registerValue.register}>
                    <td>{index + 1}</td>
                    <td>{registerValue.register}</td>
                    <td>{registerValue.variableName}</td>
                    <td>{registerValue.value}</td>
                    <td>{registerValue.note}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RegistersTable;
