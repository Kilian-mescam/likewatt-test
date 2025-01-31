"use client"

import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';
import { Model } from '@/lib/entities';
import React, { useEffect, useState } from 'react';
import { generateCustomUUID } from '@/lib/utils';
import { WeatherPanel } from '@/app/WeatherPanel';
import { useToast } from '@/hooks/use-toast';

type Props = {
  models: Model[],
}

export default function Dashboard({ models }: Props) {
  // data coming from getData
  const [modelState, setModelState] = useState(models);
  // model selected on the table
  const [displayedModel, setDisplayedModel] = useState<Model | undefined>();
  const [error, setError] = useState('');

  // location data used for weatherPanel
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // toast message to display when sucess or error
  const  { toast } = useToast();

  useEffect(() => {
    // Check for any model in modelState with an empty or missing id
    const modelsWithMissingId = modelState.filter((model) => !model.id);

    // If any models are found with missing id, update the state and attribute an id with uuid
    if (modelsWithMissingId.length > 0) {
      setModelState((prevState) =>
        prevState.map((model) =>
            !model.id ? { ...model, id: generateCustomUUID() } : model // Assign a UUID to missing id
        )
      );
    }

    // get position of current user, will be used on weatherPanel component
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude((position.coords.latitude).toString());
          setLongitude((position.coords.longitude).toString());
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setError("You denied location access. Please allow access to get your current location.");
            // toast message in case user did not give access to position in his browser
            toast({
              title: "You denied location access. Please allow access to get your current location.",
          })
          } else {
            setError("Error fetching location: " + error.message);
          }
        }
      );
    }
  }, [modelState]);

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
        <div className="w-1/2 p-10 flex flex-col">
          <NonEditableData modelState={modelState} handleSelect={setDisplayedModel} />
        </div>
        <div className="w-1/2 p-10 flex flex-col gap-4">
          <EditDocument displayedModel={displayedModel} setModelState={setModelState} setDisplayedModel={setDisplayedModel} />
        </div>
      </div>
      <div className="w-full px-10 flex flex-col">
        <WeatherPanel latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};
