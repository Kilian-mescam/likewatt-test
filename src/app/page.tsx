import Dashboard from "./Dashboard";
import { getData } from "@/lib/queries/getData";

export default async function Home() {  
  const models = await getData()
  return (
    <div>
      <main>
        <Dashboard models={models} />
      </main>
    </div>
  );
}
