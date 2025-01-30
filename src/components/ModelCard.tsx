
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Model } from "@/lib/entities"
import { Button } from "./ui/button";
import { DeleteDialog } from "./DeleteDialog";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

type Props = {
  model: Model,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
  children: React.ReactNode
}

export function ModelCard(
  { model, variant, children, className,...props }: Props
) {

  return (
<Card>
  <CardHeader>
    <CardTitle>{model.model}</CardTitle>
    <CardDescription>{model.id}</CardDescription>
  </CardHeader>
  <CardContent className='flex flex-col gap-5'>
    {children}
  </CardContent>
  <CardFooter className="flex gap-4">
    <Button variant={"outline"} >Editer</Button>
    <DeleteDialog data={model} />
  </CardFooter>
</Card>
  )
}