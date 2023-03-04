import { fetchData } from './fetchData';
import { FetchMock } from 'jest-fetch-mock';
import {
  mockStrRight,
  mockStrWrongHard,
  mockStrWrongSimple,
} from './mock.data.fetchData';
const fetchMock = fetch as FetchMock;

describe('testing function fetchData()', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });

  it('should return text, status code is 200', async () => {
    fetchMock.mockResponseOnce(mockStrRight, {
      status: 200,
      headers: { 'content-type': 'text/plain' },
    });
    const result = await fetchData();
    expect(result).toEqual(mockStrRight);
  });

  it('should return wrong simple string, status code is 200', async () => {
    fetchMock.mockResponseOnce(mockStrWrongSimple, {
      status: 200,
      headers: { 'content-type': 'text/plain' },
    });
    const result = await fetchData();
    expect(result).not.toEqual(mockStrRight);
  });

  it('should return wrong big string, status code is 200', async () => {
    fetchMock.mockResponseOnce(mockStrWrongHard, {
      status: 200,
      headers: { 'content-type': 'text/plain' },
    });
    const result = await fetchData();
    expect(result).not.toEqual(mockStrRight);
  });

  it('should return empty, status code is NOT 200', async () => {
    fetchMock.mockResponseOnce(mockStrRight, {
      status: 404,
      headers: { 'content-type': 'text/plain' },
    });
    const result = await fetchData();
    expect(result).toEqual('');
  });
});
