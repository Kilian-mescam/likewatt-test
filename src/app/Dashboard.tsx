"use client"

import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';
import { Data } from '@/lib/entities';
import { reducer } from '@/lib/reducer';
import React, { useReducer, useState } from 'react';

type Props = {
  data: Data[],
}

export default function Dashboard({ data }: Props) {
  const [dataState, setDataState] = useState(data);
  const [loading, setLoading] = useState(true);

  const [users, dispatch] = useReducer(reducer, dataState);

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
        <NonEditableData dataState={dataState} />
        <EditDocument dataState={dataState} />
    </div>
  );
};