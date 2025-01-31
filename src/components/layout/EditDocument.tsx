import { Model } from "@/lib/entities";
import { ModelCard } from "../ModelCard";
import DataForm from "@/app/DataForm";
import { Dispatch, SetStateAction } from "react";
import { CreateButton } from "../CreateButton";

type Props = {
    displayedModel?: Model
    setDisplayedModel: Dispatch<SetStateAction<Model | undefined>>
    setModelState: Dispatch<SetStateAction<Model[]>>
  }

export function EditDocument({ displayedModel, setModelState, setDisplayedModel }: Props) {
    // function called on button to change if form is used to create of edit
    const handleCreate = () => {
        setDisplayedModel(undefined)
    }

    return (
                <>
                <ModelCard model={displayedModel}>
                    <DataForm model={displayedModel} setModelState={setModelState} setDisplayedModel={setDisplayedModel} />
                </ModelCard>
                {
                    displayedModel == null ? 
                    <></>
                    : <div  className='flex justify-between items-ends w-full'>
                        <span>
                            <CreateButton 
                                onClick={handleCreate}
                                variant='outline'
                                title='Insérer une ligne'>
                            </CreateButton>
                        </span>
                    </div>
                }
                </>
    ) 
}