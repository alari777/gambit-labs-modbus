import { FC, FormEvent, useState } from 'react';
import { ModbusRegisterType } from '@/pages/api/types/FormFetchingDataType';

const RegistersTable: FC = () => {
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [report, setReport] = useState<string[]>([]);
  const [registersValues, setRegistersValues] =
    useState<ModbusRegisterType[]>();

  const addStation = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setClassSpinner(true);
    setReport([]);
    setReport((report) => [
      ...report,
      'Wait a little bit. Station is adding ...',
    ]);
    try {
      const response = await fetch('/api/v1/feed', {
        method: 'GET',
      });
      if (response.status === 200) {
        const json = await response.json();
        const { data } = json;
        setRegistersValues(data);
        setReport((report) => [...report, 'Station was added successfully.']);
      } else {
        setReport((report) => [...report, 'Station was not added.']);
      }
    } catch (err) {
      setReport((report) => [
        ...report,
        'Station was not added. Something went wrong. Please try again later.',
      ]);
    }
    setClassSpinner(false);
  };

  return (
    <>
      <form onSubmit={addStation}>
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
      </form>

      <div className='row justify-content-center'>
        <div className='col-auto'>
          <table className='table table-striped table-bordered table-responsive w-auto'>
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
      </div>
    </>
  );
};

export default RegistersTable;
