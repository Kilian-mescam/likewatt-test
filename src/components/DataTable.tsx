import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Data } from "@/lib/entities"
  
  type Props = {
    datas: Data[]
    handleSelect: (data: Data) => void
  }
  
  export function DataTable({ datas, handleSelect, ...props }: Props) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Modèle</TableHead>
            <TableHead>Capacité</TableHead>
            <TableHead className="text-right">Tilt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data) => (
            <TableRow className='cursor-pointer hover:bg-gray-100' key={data.id} onClick={() => { handleSelect(data) } } >
              <TableCell className="font-medium">{data.id}</TableCell>
              <TableCell>{data.model}</TableCell>
              <TableCell>{data.capacity}</TableCell>
              <TableCell className="text-right">{data.tilt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  