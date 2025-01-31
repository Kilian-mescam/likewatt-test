import { WeatherData } from "@/lib/entities"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wind, Cloud, Sun, Thermometer } from 'lucide-react'; // Icons for weather

type Props = {
    weatherData: WeatherData
  }
  
export function WeatherPanel({ weatherData }: Props ) {
    return (
        <div className="max-w-lg mx-auto mt-10">
        {weatherData ? (
          <Card className="shadow-lg rounded-2xl p-6 bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-semibold">
                {weatherData.sys.country}
              </CardTitle>
              <CardDescription>
                <Badge>{weatherData.weather[0].main}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 text-center">
              <div className="flex justify-start items-center gap-6">
                <Thermometer className="w-8 h-8 text-red-500" />
                <p className="text-xl font-normal">
                  Température: {Math.round(weatherData.main.temp - 273.15)}°C
                </p>
              </div>
              <div className="flex justify-start items-center gap-6">
                <Sun className="w-8 h-8 text-yellow-500" />
                <p className="text-xl font-normal">
                  Feels Like: {Math.round(weatherData.main.feels_like - 273.15)}°C
                </p>
              </div>
              <div className="flex justify-start items-center gap-6">
                <Cloud className="w-8 h-8 text-gray-400" />
                <p className="text-xl font-normal">
                  Weather: {weatherData.weather[0].description}
                </p>
              </div>
              <div className="flex justify-start items-center gap-6">
                <Wind className="w-8 h-8 text-blue-500" />
                <p className="text-xl font-normal">
                  Wind Speed: {weatherData.wind.speed} m/s
                </p>
              </div>
              <div className="flex justify-start items-center gap-6">
                <Cloud className="w-8 h-8 text-gray-400" />
                <p className="text-xl font-normal">
                  Cloudiness: {weatherData.clouds.all}%
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex justify-center">
            <p className="text-lg">Loading weather data...</p>
          </div>
        )}
      </div>
    );
}