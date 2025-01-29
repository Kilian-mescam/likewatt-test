"use client"

import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';
import { Data } from '@/lib/entities';
import { reducer } from '@/lib/reducer';
import React, { useEffect, useState } from 'react';

type Props = {
  datas: Data[],
}

export default function Dashboard({ datas }: Props) {
  const [dataState, setDataState] = useState(datas);
  const [displayedData, setDisplayedData] = useState<Data | undefined>();

  return (
    <div className='flex w-full'>
        <NonEditableData dataState={dataState} handleSelect={setDisplayedData} />
        <EditDocument displayedData={displayedData} />
    </div>
  );
};