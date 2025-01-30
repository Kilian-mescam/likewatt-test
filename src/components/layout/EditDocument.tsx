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
    const handleCreate = () => {
        setDisplayedModel(undefined)
    }

    return (
        <div className="w-1/2 p-8 flex flex-col gap-10">
                
                {
                    displayedModel == null ? 
                        <div className='flex justify-between w-full mb-3'><h1>Créer</h1><span>Sélectionner une ligne pour la modifier</span></div>
                    : 
                    <div  className='flex justify-between w-full'>
                        <h1>Modifier</h1>
                        <span>
                            <CreateButton 
                                onClick={handleCreate}
                                variant='outline'
                                title='Insérer une ligne'>
                            </CreateButton>
                        </span>
                    </div>
                }
                
                <ModelCard model={displayedModel}>
                    <DataForm model={displayedModel} setModelState={setModelState} setDisplayedModel={setDisplayedModel} />
                </ModelCard>
        </div>
    ) 
}