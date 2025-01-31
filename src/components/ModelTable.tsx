import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Model } from "@/lib/entities"
import { v4 as uuidv4 } from 'uuid';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
  
  type Props = {
    models: Model[]
    handleSelect: (model: Model) => void
  }
  
  export function ModelTable({ models, handleSelect, ...props }: Props) {
    return (
      <Card>
          <CardHeader>
            <CardTitle>Non Editable</CardTitle>
          </CardHeader>
        <CardContent>
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Modèle</TableHead>
              <TableHead className="text-center">Capacité</TableHead>
              <TableHead className="text-right">Tilt</TableHead>
              <TableHead>Actif</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model) => (
              <TableRow className='cursor-pointer hover:bg-gray-100' key={uuidv4()} onClick={() => { handleSelect(model) } } >
                <TableCell className="font-medium">{model.id}</TableCell>
                <TableCell>{model.model}</TableCell>
                <TableCell className="text-center">{model.capacity}</TableCell>
                <TableCell className="text-right">{model.tilt}</TableCell>
                <TableCell className="text-right">
                  {model.isActive ? <Check /> : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      </Card>
      
    )
  }