
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Data } from "@/lib/entities"
import { Button } from "./ui/button";
import { DeleteDialog } from "./DeleteDialog";

type Props = {
  data: Data,
  className?: string,
  deleteData?: (dataId: string) => void
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
}

export function DataCard(
  { data, variant, deleteData, className,...props }: Props
) {

  return (
<Card className="cursor-pointer border-2 border-black">
  <CardHeader>
    <CardTitle>{data.model}</CardTitle>
    <CardDescription>{data.id}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Actif : {data.isActive}</p>
    <p>Capacity : {data.capacity}</p>
    <p>Tilt: {data.tilt}</p>
  </CardContent>
  <CardFooter className="flex gap-4">
    <Button variant={"outline"} >Editer</Button>
    <DeleteDialog data={data} deleteData={deleteData} />
  </CardFooter>
</Card>
  )
}