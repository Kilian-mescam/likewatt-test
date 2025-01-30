
import { Model } from "@/lib/entities"
import { ModelCard } from "../ModelCard"
import { ModelTable } from "../ModelTable";

type Props = {
    modelState: Model[],
    handleSelect: (modelState: Model) => void;
  }
  
export function NonEditableData({ modelState, handleSelect }: Props ) {
    return (
        <div className="w-1/2 p-10 flex flex-col gap-10">
            <h1>Non editable</h1>
            <ModelTable models={modelState} handleSelect={handleSelect}/>
        </div>
    ) 
}