export type Model = {
    id: string
    isActive: boolean
    tilt: number
    capacity: number
    model: string
  }

  export type WeatherDay = {
    dt: number; // Unix timestamp
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    clouds: {
      all: number;
    };
    pop: number; // Probability of precipitation
    visibility: number; // Visibility in meters
  };

  type City = {
    id: number;
    name: string;
    country: string;
    population: number;
  };
  
  export type WeatherData = {
    city: City;
    cnt: number; // Count of weather entries
    cod: string; // API response code
    list: WeatherDay[]; // List of weather data for 5 days
  };