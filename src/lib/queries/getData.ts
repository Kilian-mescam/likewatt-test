import axios from 'axios';

export const getData = async () => {
  try {
    const url = 'https://apitest.likewatt-infra.com/entry-test/2';

    // Make the request using Axios
    const response = await axios.get(url);

    // Extract the data from the response
    const data = response.data.data;

    return data;
  } catch (error: unknown) {
    // Handle the error
    if (axios.isAxiosError(error)) {
      console.log('Axios error:', error.response?.data || error.message);
      throw new Error(`An Axios error happened: ${error.message}`);
    } else {
      console.log('Unknown error:', error);
      throw new Error(`An unknown error happened: ${error}`);
    }
  }
};
