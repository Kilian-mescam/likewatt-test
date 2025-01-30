"use client"

import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';
import { Model } from '@/lib/entities';
import React, { useEffect, useState } from 'react';
import { generateCustomUUID } from '@/lib/utils';

type Props = {
  models: Model[],
}

export default function Dashboard({ models }: Props) {
  const [modelState, setModelState] = useState(models);
  const [displayedModel, setDisplayedModel] = useState<Model | undefined>();

  useEffect(() => {
    // Check for any model in modelState with an empty or missing id
    const modelsWithMissingId = modelState.filter((model) => !model.id);


    // If any models are found with missing id, update the state
    if (modelsWithMissingId.length > 0) {
        setModelState((prevState) =>
            prevState.map((model) =>
                !model.id ? { ...model, id: generateCustomUUID() } : model // Assign a UUID to missing id
            )
        );
    }
}, [modelState]);

  return (
    <div className='flex w-full'>
        <NonEditableData modelState={modelState} handleSelect={setDisplayedModel} />
        <EditDocument displayedModel={displayedModel} setModelState={setModelState} setDisplayedModel={setDisplayedModel} />
    </div>
  );
};
