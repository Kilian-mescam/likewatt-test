import { Model } from "@/lib/entities";
import { ModelCard } from "../ModelCard";
import DataForm from "@/app/DataForm";
import { Dispatch, SetStateAction, useState } from "react";
import { CreateButton } from "../CreateButton";

type Props = {
    displayedModel?: Model
    setModelState: Dispatch<SetStateAction<Model[]>>
  }

export function EditDocument({ displayedModel, setModelState }: Props) {
    const [newLine, setNewLine] = useState<boolean>(false)
    return (
        <div className="w-1/2 p-8 flex flex-col gap-10">
            <div className='flex justify-between'><h1>Edit</h1></div>
            
                <ModelCard model={displayedModel}>
                    <DataForm model={displayedModel} setModelState={setModelState} />
                </ModelCard>
        </div>
    ) 
}