
import Link from "next/link"
import Dashboard from "./Dashboard";
import { getData } from "@/lib/queries/getData";

export default async function Home() {  
  const data = await getData()
  return (
    <div>
      <main>
        <div className='p-5'>
          <Dashboard data={data} />
      </div>
      </main>
    </div>
  );
}
