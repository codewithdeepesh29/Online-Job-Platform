"use client";

import { title } from "process";
import { z } from "zod";
import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    title: z.string().min(1, { message: "Job Title cannot be Empty!!" }),
});


const JobCreatePage = () => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues : {
            title: "",
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async(values : z.infer<typeof formSchema>) => {
        console.log(values);
    };   

    return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6" >
        <div>
            <h1 className="text-2xl font-bold">
                Name your Job 
            </h1>
            <p className="text-sm text-neutral-500"> What Would you Like to name your Job? Don&apos;t worry, you can change this later !</p>
        

        {/* form */}
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
            >
                {/* form fields */}
                <FormField 
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isSubmitting}
                                    placeholder="e.g 'Senior Frontend Developer'"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription> Role of this job</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex item-centre gap-x-2">
                    <Link href={"/"}>
                        <Button type="button" variant={"ghost"}>Cancel</Button>
                    </Link>
                    <Button type="submit" disabled={!isValid || isSubmitting}>Continue</Button>

                </div>
            </form>
        </Form>
    </div> 
    </div>   
    );
};
 
export default JobCreatePage;
