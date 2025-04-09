"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { appendSheetData } from "@/app/actions"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"
import { Loader2Icon } from "lucide-react"

const formSchema = z.object({
    email: z.string().email('Email is invalid').nonempty('Email is required'),
})

export function SubscribeForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true);
            const response = await appendSheetData(values.email)
            if (response) {
                toast({
                    className: 'bg-green-500 text-white',
                    title: "Thank you! You'll be the first to know when Arda has a new update.",
                })
                form.reset()
            } else {
                toast({
                    variant: 'destructive',
                    title: "Subscribe failed",
                })
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex items-start gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className=" max-w-[360px] w-full">
                                <FormControl>
                                    <Input className="rounded-xl backdrop-blur-lg h-12 font-semibold text-base placeholder:text-white text-white bg-white/20 border-none focus-visible:ring-0 focus-visible:border-none" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isLoading} size={'lg'} className="h-12 rounded-xl max-w-[122px] w-full font-semibold text-white " type="submit">
                        Subscribe
                        {
                            isLoading &&
                            <Loader2Icon className="animate-spin" />
                        }
                    </Button>
                </div>
            </form>
        </Form>
    )
}
