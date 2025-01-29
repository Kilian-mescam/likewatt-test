
import { Data } from "@/lib/entities"

type Props = {
    dataState: Data[],
  }
  
export function NonEditableData({ dataState }: Props ) {

    return (
        <div className="bg-yellow-100 w-1/2">
                <h1>Editable</h1>
                <div className='flex flex-col w-full'>
                    {dataState.map((item: Data, key) => (
                        <ul className='p-10 border border-black m-4' key={item.id} >
                            <li>ID: {item.id}</li>
                            <li>Est-il actif ? {item.isActive ? 'oui' : 'non'}</li>
                            <li>Capacité: {item.capacity}</li>
                            <li>Model: {item.model}</li>
                            <li>Tilt: {item.tilt}</li>
                        </ul>
                    ))}
            </div>
        </div>
    ) 
}