import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-bold text-3xl">Get in Touch</CardTitle>
            <CardDescription className="text-lg">
              Feel free to reach out if you have any questions or opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6 pt-6">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:raz@friman.au">
                <Mail className="h-5 w-5" />
                raz@friman.au
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
