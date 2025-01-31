
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Model } from "@/lib/entities"
import { Button } from "./ui/button";
import { DeleteDialog } from "./DeleteDialog";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { CreateButton } from "./CreateButton";

type Props = {
  model?: Model,
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
        <CardTitle>{model?.id ? model?.id : "Aucun ID attribué"}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-5'>
        {children}
      </CardContent>
    </Card>
  )
}