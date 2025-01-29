import { EditDocument } from '@/components/layout/EditDocument';
import { NonEditableData } from '@/components/layout/NonEditableData';

import React from 'react';

export default async function Dashboard() {
  return (
    <div className='flex w-full'>
        <NonEditableData />
        <EditDocument />
    </div>
  );
};