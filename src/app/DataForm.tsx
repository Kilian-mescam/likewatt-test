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
import { DeleteDialog } from "@/components/DeleteDialog"
import { Label } from "@/components/ui/label"

type Props = {
    model: Model,
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

    const updateModelStateById = (id: string, key: keyof Model, newValue: Model[keyof Model]) => {

        console.log('id', id)
        console.log('key', key)
        console.log('newValue', newValue)
        
        setModelState((prevState) =>
            prevState.map((item) =>
                item.id === id ? { ...item, [key]: newValue } : item
            )
        );
    };

    async function submitForm(model: Model) {
        Object.keys(model).forEach((key) => {
            const typedKey = key as keyof Model;
            const newValue = model[typedKey];

            console.log('data inside submit form', model)

            updateModelStateById(model.id, typedKey, newValue);
        });

        toast({
            title: "Model updated successfully!",
        });
    }

    return (
        <div className="flex flex-col">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-8">
                    
                    {/* Model Name */}
                        <Input
                            type="text"
                            placeholder="Model Name"
                            {...form.register('model')}
                        />

                        {/* Tilt */}
                        <Input
                            type="number"
                            placeholder="Tilt"
                            min={0}
                            max={180}
                            {...form.register('tilt', { valueAsNumber: true })}
                        />

                        {/* Capacity */}
                        <Input
                            type="number"
                            placeholder="Capacity"
                            {...form.register('capacity', { valueAsNumber: true })}
                        />

                        {/* Active Checkbox */}
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isActive"
                                {...form.register('isActive')}
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