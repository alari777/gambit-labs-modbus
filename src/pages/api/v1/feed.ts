import { createHandler, Get } from 'next-api-decorators';

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
