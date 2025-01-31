"use client"

import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';
import { Model, WeatherData } from '@/lib/entities';
import React, { useEffect, useState } from 'react';
import { generateCustomUUID } from '@/lib/utils';
import { WeatherPanel } from '@/components/layout/WeatherPanel';

type Props = {
  models: Model[],
  weatherData: WeatherData
}

export default function Dashboard({ models, weatherData }: Props) {
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
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
        <div className="w-1/2 p-10 flex flex-col">
          <NonEditableData modelState={modelState} handleSelect={setDisplayedModel} />
        </div>
        <div className="w-1/2 py-4 px-10 flex flex-col gap-4">
          <EditDocument displayedModel={displayedModel} setModelState={setModelState} setDisplayedModel={setDisplayedModel} />
        </div>
      </div>
      <div className="w-full p-10 flex flex-col">
        <WeatherPanel weatherData={weatherData} />
        </div>
    </div>
  );
};
