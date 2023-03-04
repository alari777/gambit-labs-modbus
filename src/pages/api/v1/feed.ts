import { createHandler, Get } from 'next-api-decorators';
import { fetchData } from '@/pages/api/v1/helpers/fetchData';
import { formFetchingData } from '@/pages/api/utils/formFetchingData/formFetchingData';
import { FormFetchingDataType } from '@/pages/api/types/FormFetchingDataType';
import { responseRegistersValues } from '@/pages/api/utils/responseRegistersValues/responseRegistersValues';

class FetchRegistersData {
  // GET /api/v1/feed
  @Get()
  async fetchRegistersData(): Promise<FormFetchingDataType> {
    const result = await fetchData();
    const foo1 = formFetchingData(result);
    const foo2 = responseRegistersValues();
    return {
      date: foo1.date,
      data: foo2,
    };
  }
}

export default createHandler(FetchRegistersData);
