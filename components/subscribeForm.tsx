"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"
import { Loader2Icon } from "lucide-react"

export function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            toast({
                variant: 'destructive',
                title: "Please enter a valid email address",
            });
            return;
        }

        try {
            setIsLoading(true);
            
            // Submit to Google Form in the background
            const formData = new FormData();
            // You'll need to replace 'entry.XXXXXXXXX' with the actual entry ID from your Google Form
            // To find this: Right-click on your Google Form → View Page Source → Search for "entry."
            formData.append('entry.2000592701', email); // Replace with your actual entry ID
            
            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdbXDWhJlT_1PRIwfj15ycqjbApzUy2znsmQk02TpIYrTgwqw/formResponse', {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Important: This prevents CORS errors with Google Forms
            });
            
            // Since we use 'no-cors', we can't check the actual response
            // Google Forms will accept the submission regardless
            toast({
                className: 'bg-green-500 text-white',
                title: "Thank you! You'll be the first to know when Arda has a new update.",
            });
            setEmail("");
            
        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                variant: 'destructive',
                title: "Something went wrong. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className="w-full" onSubmit={onSubmit}>
            <div className="flex items-start gap-4">
                <div className="max-w-[360px] w-full">
                    <Input 
                        className="rounded-xl backdrop-blur-lg h-12 font-semibold text-base placeholder:text-white text-white bg-white/20 border-none focus-visible:ring-0 focus-visible:border-none" 
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <Button 
                    disabled={isLoading} 
                    size={'lg'} 
                    className="h-12 rounded-xl max-w-[122px] w-full font-semibold text-white" 
                    type="submit"
                >
                    Subscribe
                    {isLoading && <Loader2Icon className="animate-spin ml-2" />}
                </Button>
            </div>
        </form>
    );
}
