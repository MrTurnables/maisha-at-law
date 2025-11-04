import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale, Shield, FileText, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Expert Legal Counsel You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              With decades of combined experience, Maisha At Law provides comprehensive legal services tailored to your unique needs. We fight for justice and protect your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#practice-areas">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center p-8 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
                <Scale className="w-16 h-16 text-primary mb-4" />
                <p className="text-sm font-semibold text-center">Justice</p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
                <Shield className="w-16 h-16 text-primary mb-4" />
                <p className="text-sm font-semibold text-center">Protection</p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
                <FileText className="w-16 h-16 text-primary mb-4" />
                <p className="text-sm font-semibold text-center">Documentation</p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
                <Users className="w-16 h-16 text-primary mb-4" />
                <p className="text-sm font-semibold text-center">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
