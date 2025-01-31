import Dashboard from "./Dashboard";
import { getData } from "@/lib/queries/getData";
import { getWeather } from "@/lib/queries/getWeather";

export default async function Home() {  
  const models = await getData()
  const weatherData = await getWeather('44.34', '45.36')
  return (
    <div>
      <main>
        <div className='p-5'>
          <Dashboard models={models} weatherData={weatherData} />
      </div>
      </main>
    </div>
  );
}
