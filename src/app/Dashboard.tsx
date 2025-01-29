"use client"

import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';
import { Data } from '@/lib/entities';
import { reducer } from '@/lib/reducer';
import React, { useReducer, useState } from 'react';

type Props = {
  datas: Data[],
}

export default function Dashboard({ datas }: Props) {
  const [dataState, setDataState] = useState(datas);
  const [displayedData, setDisplayedData] = useState<Data | undefined>();

  const [loading, setLoading] = useState(true);

  const [reducersDatas, dispatch] = useReducer(reducer, dataState);

    // Fonction pour ajouter un data
    const addData = (newData: Data) => {
      dispatch({ type: 'ADD_DATA', payload: newData });
    };
  
    // Fonction pour supprimer un data
    const deleteData = (id: string) => {
      dispatch({ type: 'DELETE_DATA', payload: id });
    };

  return (
    <div className='flex w-full'>
        <NonEditableData dataState={dataState} handleSelect={setDisplayedData} />
        <EditDocument displayedData={displayedData} deleteData={deleteData} />
    </div>
  );
};