
import { Model } from "@/lib/entities"
import { ModelTable } from "../ModelTable";

type Props = {
    modelState: Model[],
    handleSelect: (modelState: Model) => void;
  }
  
export function NonEditableData({ modelState, handleSelect }: Props ) {
    return (
        <ModelTable models={modelState} handleSelect={handleSelect} />
    ) 
}