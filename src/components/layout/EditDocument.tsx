import { Model } from "@/lib/entities";
import { ModelCard } from "../ModelCard";
import DataForm from "@/app/DataForm";
import { Dispatch, SetStateAction } from "react";

type Props = {
    displayedModel?: Model
    setModelState: Dispatch<SetStateAction<Model[]>>
  }

export function EditDocument({ displayedModel, setModelState }: Props) {
    return (
        <div className="w-1/2 p-10 flex flex-col gap-10">
            <h1>Edit</h1>
            {displayedModel !== undefined
                ? 
                <ModelCard model={displayedModel}>
                    <DataForm model={displayedModel} setModelState={setModelState} />
                </ModelCard> 
                : null }
        </div>
    ) 
}