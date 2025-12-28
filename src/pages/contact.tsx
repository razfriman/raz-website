import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Card className={cn("border-cyan-500/20 p-8 dark:border-cyan-500/40")}>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center rounded-xl bg-cyan-500 p-4 shadow-md">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-2xl">Get in Touch</h2>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>
          <Button
            size="lg"
            className="h-14 gap-3 bg-cyan-500 px-8 text-lg text-white hover:bg-cyan-600"
            render={
              <a href="mailto:raz@friman.au">
                <Mail className="h-6 w-6" />
                raz@friman.au
              </a>
            }
          />
        </div>
      </Card>
    </div>
  );
}
