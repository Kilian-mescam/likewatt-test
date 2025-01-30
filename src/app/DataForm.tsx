"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Model } from "@/lib/entities"
import { modelSchema } from "@/lib/schema"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Dispatch, SetStateAction } from "react"

type Props = {
    model?: Model,
    setModelState: Dispatch<SetStateAction<Model[]>>
}

export default function DataForm({ model, setModelState }: Props) {

    const  { toast } = useToast();

    const defaultValues: Model = {
        id: model?.id ?? '',
        isActive: model?.isActive ?? false,
        tilt: model?.tilt ?? 0,
        capacity: model?.capacity ?? 0,
        model: model?.model ?? ''
    }

    const form = useForm<Model>({
        mode: 'onBlur',
        resolver: zodResolver(modelSchema),
        defaultValues,
    })

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(modelSchema),
      });


    // Function to update a specific model's state by id
    const updateModelStateById = (id: string, key: keyof Model, newValue: Model[keyof Model]) => {
        setModelState((prevState) =>
        prevState.map((item) =>
            item.id === id ? { ...item, [key]: newValue } : item
        )
        )
    }

    async function submitForm(data: Model) {
        // Update the modelState by calling updateModelStateById for each form field
        updateModelStateById(data.id, 'model', data.model)
        updateModelStateById(data.id, 'tilt', data.tilt)
        updateModelStateById(data.id, 'capacity', data.capacity)
        updateModelStateById(data.id, 'isActive', data.isActive)

        toast({
        title: "Model updated successfully!",
        })

        reset(data) // Reset the form with the new data if needed
    }

    return (
        <div className="flex flex-col">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-8">
                    <Input type="text" placeholder={model?.id}  value={model?.id} />
                    {/* Model Name */}
                    <Input
                        type="text"
                        placeholder="Model Name"
                        {...form.register('model')}
                        defaultValue={model?.model}
                    />
                    {/* Tilt */}
                    <Input
                        type="number"
                        placeholder="Tilt"
                        min={0}
                        max={180}
                        {...form.register('tilt', { valueAsNumber: true })}
                        defaultValue={model?.tilt}
                    />
                    {/* Capacity */}
                    <Input
                    type="number"
                    placeholder="Capacity"
                    {...form.register('capacity', { valueAsNumber: true })}
                    defaultValue={model?.capacity}
                    />

                    {/* Active Checkbox */}
                    <div className="flex items-center space-x-2">
                    <Checkbox
                        id="isActive"
                        {...form.register('isActive')}
                        defaultChecked={model?.isActive}
                    />
                    <label
                        htmlFor="isActive"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Model Active
                    </label>
                    </div>
                        
                    </div>
                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <div className="flex gap-2 mt-10">
                            <Button
                                type="submit"
                                className="w-3/4 text-white"
                                variant="secondary"
                                title="Save"
                            >
                            </Button>
                        </div>
                    </div>

                </form>
            </Form>

        </div>
    )
}