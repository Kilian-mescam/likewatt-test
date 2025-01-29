import { Data } from "@/lib/entities";
import { DataCard } from "../DataCard";

type Props = {
    displayedData?: Data
    deleteData: (dataId: string) => void
  }

  
export function EditDocument({ displayedData, deleteData }: Props) {
    
    return (
        <div className="w-1/2 p-10">
                {displayedData !== undefined ? <DataCard data={displayedData} deleteData={deleteData} /> : null }
            </div>
    ) 
}