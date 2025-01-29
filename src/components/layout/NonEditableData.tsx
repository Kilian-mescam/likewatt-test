
import { Data } from "@/lib/entities"
import { DataCard } from "../DataCard"
import { DataTable } from "../DataTable";

type Props = {
    dataState: Data[],
    handleSelect: (data: Data) => void;
  }
  
export function NonEditableData({ dataState, handleSelect }: Props ) {
    return (
        <div className="w-1/2">
                <div className='flex flex-col gap-10 w-full p-10'>
                    <DataTable datas={dataState} handleSelect={handleSelect}/>
            </div>
        </div>
    ) 
}