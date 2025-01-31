import axios from "axios";



export const getWeather = async (lat: string, lon: string) => {
    try {
      const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
      const appid = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
      const cnt = '40'

      // throw error in case api key is missing
      if (!appid) {
        throw new Error("API key is missing. Please check your environment variable.");
      }

       // concatenate values 
        const requestURL = `${baseURL}?lat=${lat}&lon=${lon}&appid=${appid}&cnt=${cnt}`

      // Make the request using Axios
      const response = await axios.get(requestURL);

      // Extract the data from the response
      const data = response.data;
  
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
  