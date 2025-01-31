import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wind, Cloud, Sun, Thermometer } from 'lucide-react'; // Icons for weather
import { getWeather } from "@/lib/queries/getWeather";

type Props = {
  latitude: string;
  longitude: string;
};

export function WeatherPanel({ latitude, longitude }: Props) {
  const [weatherData, setWeatherData] = useState<any>(null); // Store weather data
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

  return (
    <div className="max-full">
      {weatherData ? (
        <Card className="shadow-lg rounded-2xl p-6 bg-white">
          <CardHeader className="text-start">
            <CardTitle className="text-3xl font-semibold">
              Météo du coin
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-center">
            <div className="flex justify-start items-center gap-6">
              <Thermometer className="w-8 h-8 text-red-500" />
              <p className="text-xl font-normal">
                {Math.round(weatherData.main.temp - 273.15)}°C
              </p>
            </div>
            <div className="flex justify-start items-center gap-6">
              <Sun className="w-8 h-8 text-yellow-500" />
              <p className="text-xl font-normal">
                Température ressentie: {Math.round(weatherData.main.feels_like - 273.15)}°C
              </p>
            </div>
            <div className="flex justify-start items-center gap-6">
              <Cloud className="w-8 h-8 text-gray-400" />
              <p className="text-xl font-normal">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div className="flex justify-start items-center gap-6">
              <Wind className="w-8 h-8 text-blue-500" />
              <p className="text-xl font-normal">
                {weatherData.wind.speed} m/s
              </p>
            </div>
            <div className="flex justify-start items-center gap-6">
              <Cloud className="w-8 h-8 text-gray-400" />
              <p className="text-xl font-normal">
                {weatherData.clouds.all}%
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex justify-center">
          <p className="text-lg">No weather data available.</p>
        </div>
      )}
    </div>
  );
}
