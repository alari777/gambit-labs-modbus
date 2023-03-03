import { createHandler, Get } from 'next-api-decorators';
import { fetchData } from '@/pages/api/v1/helpers/fetchData';

class FetchRegistersData {
  // GET /api/v1/feed
  @Get()
  async fetchRegistersData(): Promise<any> {
    const result = await fetchData();
    console.log(result);
    return {
      registersData: result,
    };
  }
}

export default createHandler(FetchRegistersData);
