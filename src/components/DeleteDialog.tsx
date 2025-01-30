import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Model } from "@/lib/entities"

  type Props = {
    model?: Model,
    deleteData?: () => void
    className?: string,
  }
  
  export function DeleteDialog(
    { model, className, deleteData, ...props }: Props) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" >Supprimer</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Souhaitez-vous supprimer le projet {model?.model} </AlertDialogTitle>
            <AlertDialogDescription>
              Cette action va entrainer la suppression du modèle {model?.model}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deleteData} className='bg-red-400'>Supprimer définitivement</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  