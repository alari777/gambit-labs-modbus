// This function downloads remote text file with registers data
export async function fetchData(): Promise<string> {
  try {
    const response = await fetch('http://tuftuf.gambitlabs.fi/feed.txt', {
      method: 'GET',
      headers: {
        'content-type': 'text/plain;charset=UTF-8',
      },
    });
    if (response.status === 200) {
      return await response.text();
    } else {
      return '';
    }
  } catch (err) {
    return '';
  }
}
