
import Link from "next/link"
import Dashboard from "./Dashboard";
import { getData } from "@/lib/queries/getData";

export default async function Home() {  
  const models = await getData()
  return (
    <div>
      <main>
        <div className='p-5'>
          <Dashboard models={models} />
      </div>
      </main>
    </div>
  );
}
