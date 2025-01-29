import { Data } from "@/lib/entities";

type Props = {
    dataState: Data[],
  }

  
export function EditDocument({ dataState }: Props) {
    
    return (
        <div className="bg-blue-100  w-1/2">
                Edit Document
            </div>
    ) 
}