"use client"

import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';
import { Model } from '@/lib/entities';
import React, { useEffect, useState } from 'react';

type Props = {
  models: Model[],
}

export default function Dashboard({ models }: Props) {
  const [modelState, setModelState] = useState(models);
  const [displayedModel, setDisplayedModel] = useState<Model | undefined>();

  return (
    <div className='flex w-full'>
        <NonEditableData modelState={modelState} handleSelect={setDisplayedModel} />
        <EditDocument displayedModel={displayedModel} setModelState={setModelState} />
    </div>
  );
};