import axios from "axios";



export const getWeather = async (lon: string, lat: string) => {
    try {
      const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
      const appid = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
        const requestURL = `${baseURL}?lat=${lat}&lon=${lon}&appid=${appid}`
      // Make the request using Axios
      const response = await axios.get(requestURL);

      // Extract the data from the response
      const data = response.data;
  
      return data; // Return the full data or customize based on the structure
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
  