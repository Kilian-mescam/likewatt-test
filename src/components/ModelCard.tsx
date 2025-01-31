
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Model } from "@/lib/entities"

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
      <CardContent className='flex flex-col gap-10'>
        {children}
      </CardContent>
    </Card>
  )
}