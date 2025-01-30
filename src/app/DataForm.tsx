"use client"

import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Model } from "@/lib/entities"
import { modelSchema } from "@/lib/schema"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { generateCustomUUID } from "@/lib/utils"

type Props = {
    model?: Model,
    setModelState: Dispatch<SetStateAction<Model[]>>
}

export default function DataForm({ model, setModelState }: Props) {

    const  { toast } = useToast();

    const defaultValues: Model = {
        id: model?.id ?? '0',
        isActive: model?.isActive ?? false,
        tilt: model?.tilt ?? 0,
        capacity: model?.capacity ?? 0,
        model: model?.model ?? ''
    };


    const form = useForm<Model>({
        mode: 'onBlur',
        resolver: zodResolver(modelSchema),
        defaultValues,
    });

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = form;  // Make sure to destructure from the `form` object here

    // Update the model state by id or add the new model if id is missing
    const updateModelState = (model: Model) => {
        if (model.id) {
            // If model has an ID, update it in the state
            setModelState((prevState) =>
                prevState.map((item) =>
                    item.id === model.id ? { ...item, ...model } : item
                )
            )
        } else {
            // If model has no ID, add it as a new entry
            setModelState((prevState) => [...prevState, { ...model, id: generateCustomUUID() }]) // Use a timestamp as the new id
        }
    }

    // Handle form submission
    async function submitForm(model: Model) {
        updateModelState(model)

        toast({
            title: model.id ? "Modèle modifié avec succès!" : "Nouveau modèle créé avec succès!",
        })
    }

    useEffect(() => {
        reset({
            id: model?.id ?? '',
            isActive: model?.isActive ?? false,
            tilt: model?.tilt ?? 0,
            capacity: model?.capacity ?? 0,
            model: model?.model ?? '',
        });
    }, [model, reset]);

    return (
        <div className="flex flex-col">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-4">
                    
                    {/* Model Name */}
                        <div>
                            <Label>Modèle</Label>
                            <Input
                            type="text"
                            placeholder="Modèle"
                            {...form.register('model')}
                            />
                        </div>
                        

                        {/* Tilt */}
                        <div>
                            <Label>Tilt</Label>
                            <Input
                                type="number"
                                placeholder="Tilt"
                                min={0}
                                max={180}
                                {...form.register('tilt', { valueAsNumber: true })}
                            />
                        </div>
                        
                        {/* Capacity */}
                        <div>
                            <Label>Capacité</Label>
                            <Input
                                type="number"
                                placeholder="Capacité"
                                min={0}
                                {...form.register('capacity', { valueAsNumber: true })}
                            />
                        </div>
                        
                        {/* Active Checkbox */}
                        <div className="flex items-center space-x-2">
                            <Label>Actif</Label>
                            <Controller
                                control={control}
                                name="isActive"
                                render={({ field }) => (
                                    <Checkbox
                                        id="isActive"
                                        checked={field.value}
                                        onCheckedChange={(checked) => field.onChange(checked)} // Ensure onChange is handled
                                        onChange={(e) => field.onChange(e.target as HTMLInputElement)} // Ensure that `checked` state is updated
                                    />
                                )}
                            />
                        </div>
                       
                    </div>
                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className=""
                                variant="secondary"
                                title="Save"
                            >
                                Sauvegarder
                            </Button>
                        </div>
                    </div>

                </form>
            </Form>

        </div>
    )
}