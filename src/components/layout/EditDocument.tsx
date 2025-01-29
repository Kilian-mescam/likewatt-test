import { Data } from "@/lib/entities";
import { DataCard } from "../DataCard";

type Props = {
    displayedData?: Data
  }

export function EditDocument({ displayedData }: Props) {
    
    return (
        <div className="w-1/2 p-10">
            {displayedData !== undefined ? <DataCard data={displayedData} /> : null }
        </div>
    ) 
}