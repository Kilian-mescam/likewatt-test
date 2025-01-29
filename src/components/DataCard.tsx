
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Data } from "@/lib/entities"
import { Button } from "./ui/button";
import { DeleteDialog } from "./DeleteDialog";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

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
<Card>
  <CardHeader>
    <CardTitle>{data.model}</CardTitle>
    <CardDescription>{data.id}</CardDescription>
  </CardHeader>
  <CardContent>
    <Input type="email" placeholder="Email" value={data.id} />
    <Input type="email" placeholder="Email" value={data.model}  />
    <Input type="email" placeholder="Email" value={data.tilt} />
    <div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
        Accept terms and conditions
    </label>
    </div>
  </CardContent>
  <CardFooter className="flex gap-4">
    <Button variant={"outline"} >Editer</Button>
    <DeleteDialog data={data} deleteData={deleteData} />
  </CardFooter>
</Card>
  )
}