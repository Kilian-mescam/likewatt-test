import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wind, Cloud, Sun, Thermometer, Droplet } from 'lucide-react'; // Icons for weather
import { getWeather } from "@/lib/queries/getWeather";
import { WeatherData, WeatherDay } from "@/lib/entities";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type Props = {
  latitude: string;
  longitude: string;
};

export function WeatherPanel({ latitude, longitude }: Props) {
  const [weatherData, setWeatherData] = useState<WeatherData>(); // Store weather data
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track any errors

  useEffect(() => {
    // Check if latitude and longitude are valid before making API call
    if (!latitude || !longitude || isNaN(Number(latitude)) || isNaN(Number(longitude))) {
      setError("Invalid latitude or longitude.");
      setLoading(false);
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getWeather(latitude, longitude); // Call the getWeather API
        setWeatherData(data);
      } catch (err) {
        setError("Error fetching weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();


  }, [latitude, longitude]); // Re-run when lat or lon changes

  if (loading) {
    return (
      <div className="flex justify-center">
        <p className="text-lg">Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    } as const; 
    
    return date.toLocaleDateString('fr-FR', options); // Output in French format
  };

  const filteredWeatherData = weatherData?.list.filter((weatherDay) => 
    weatherDay.dt_txt.includes("12:00:00")
  );

  console.log('filteredWeatherData', filteredWeatherData)

  return (
    <div className="mt-10">
    <Card className="shadow-lg rounded-2xl p-6 bg-white mb-6">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold">Météo à {weatherData?.city.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row justify-center gap-4">
        <Carousel className="w-full max-w-xs">
        <CarouselContent>
        {filteredWeatherData && filteredWeatherData.map((dayData, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
              <Card key={index} className="shadow-lg rounded-2xl p-4 bg-gray-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold">
                    {getFormattedDate(dayData.dt_txt)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-center">
                  <div className="flex justify-start items-center gap-2">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    <p className="text-sm font-normal">
                      {Math.round(dayData.main.temp - 273.15)}°C
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <p className="text-sm font-normal">
                      Feels Like: {Math.round(dayData.main.feels_like - 273.15)}°C
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <Cloud className="w-5 h-5 text-gray-400" />
                    <p className="text-sm font-normal">
                      Clouds: {dayData.clouds.all}%
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <Wind className="w-5 h-5 text-blue-500" />
                    <p className="text-sm font-normal">
                      Wind: {dayData.wind.speed} m/s
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <Droplet className="w-5 h-5 text-blue-300" />
                    <p className="text-sm font-normal">
                      Precipitation: {Math.round(dayData.pop * 100)}%
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-sm font-normal">
                      Visibility: {dayData.visibility / 1000} km
                    </p>
                  </div>
                </CardContent>
              </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
        </CardContent>
    </Card>
  </div>
);
}
