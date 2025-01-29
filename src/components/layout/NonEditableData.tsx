import { Data } from "@/lib/entities"
import { getData } from "@/lib/queries/getData"

export async function NonEditableData() {
    const data = await getData()
    console.log(data)
    return (
        <div className="bg-yellow-100 w-1/2">
                <h1>Editable</h1>
                <div className='flex flex-col w-full'>
                    {data.data.map((item: Data) => (
                        <ul className='p-10 border border-black m-4'>
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