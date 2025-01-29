
import Link from "next/link"
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <div>
      <main>
        <div className='p-5'>
          <Dashboard />
      </div>
      </main>
    </div>
  );
}
