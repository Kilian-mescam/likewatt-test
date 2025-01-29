"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { DisplayServerActionResponse } from "@/components/DisplayServerActionResponse"
import { Data } from "@/lib/entities"
import { dataSchema } from "@/lib/schema"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

type Props = {
    data?: Data,
    setDataState: (data: Data) => void
}

export default function DataForm({ data, setDataState }: Props) {

    const  { toast } = useToast();

    const defaultValues: Data = {
        id: data?.id ?? '',
        isActive: data?.isActive ?? false,
        tilt: data?.tilt ?? 0,
        capacity: data?.capacity ?? 0,
        model: data?.model ?? ''
    }

    const form = useForm<Data>({
        mode: 'onBlur',
        resolver: zodResolver(insertProjectSchema),
        defaultValues,
    })

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(dataSchema),
      });



    return (
        <div className="flex flex-col">
            <DisplayServerActionResponse result={saveResult} />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-8">
                        <div className='flex flex-col'>
                            <Input type="email" placeholder="Email" />
                            <Input type="email" placeholder="Email" />
                            <Input type="email" placeholder="Email" />
                            <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                            </div>
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