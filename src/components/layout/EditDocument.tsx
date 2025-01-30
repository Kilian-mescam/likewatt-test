import { Model } from "@/lib/entities";
import { ModelCard } from "../ModelCard";
import DataForm from "@/app/DataForm";
import { Dispatch, SetStateAction } from "react";

type Props = {
    displayedModel?: Model
    setModelState: Dispatch<SetStateAction<Model[]>>
  }

export function EditDocument({ displayedModel, setModelState }: Props) {
    
    // Function to update a specific property of a model by its id
    const updateModelStateById = (
        id: string,              // id is a string
        key: keyof Model,        // key is one of the keys of Model type
        newValue: Model[keyof Model] // newValue must match the type of the property being updated
    ) => {
        setModelState((prevState) =>
        prevState.map((item) =>
            item.id === id
            ? { ...item, [key]: newValue } // Dynamically update the specified property (key) with the new value
            : item
        )
        );
    };

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