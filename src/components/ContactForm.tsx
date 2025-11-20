"use client";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Basic client-side validation
    if (fullName.length < 2) {
      toast({
        title: "Invalid Name",
        description: "Please enter your full name (at least 2 characters)",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    
    if (message.length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please enter a message (at least 10 characters)",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      console.log('Submitting form:', { fullName, email, message });
      
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });
      
      const data = await res.json();
      console.log('API response:', { status: res.status, data });
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });

      // Reset form
      setFullName("");
      setEmail("");
      setMessage("");
      
      // Navigate home after delay
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 2000);

    } catch (err: any) {
      console.error('Form submission error:', err);
      toast({
        title: "Error Sending Message",
        description: err.message || "Something went wrong! Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="min-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            id="fullname"
            placeholder="Your Name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">Your Message</Label>
        <Textarea
          placeholder="Tell me about about your project,"
          id="content"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          I&apos;ll never share your data with anyone else. Pinky promise!
        </p>
      </div>
      <Button
        disabled={loading}
        className={cn(
          "bg-gradient-to-br relative group/btn from-black to-neutral-600",
          "dark:from-zinc-800 dark:to-zinc-900",
          "block w-full text-white rounded-md h-10 font-medium",
          "shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
          "dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
          "hover:shadow-none transition-shadow duration-300"
        )}
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p>Please wait</p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Send Message <ChevronRight className="w-4 h-4 ml-4" />
          </div>
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};
