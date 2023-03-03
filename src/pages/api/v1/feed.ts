import { createHandler, Get } from 'next-api-decorators';
import { fetchData } from '@/pages/api/v1/helpers/fetchData';

class FetchRegistersData {
  // GET /api/v1/feed
  @Get()
  async fetchRegistersData(): Promise<any> {
    const result = await fetchData();
    const arr = result.split('\n');
    const date = arr[0];
    arr.pop();
    const data = arr.map((value) => {
      return Number(value.split(':')[1]);
    });
    return {
      date,
      data,
    };
  }
}

export default createHandler(FetchRegistersData);
