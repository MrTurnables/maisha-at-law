import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
              With decades of combined experience, Maisha at Law provides comprehensive legal services tailored to your unique needs. We fight for justice and protect your rights.
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
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image 
              src="/img1.jpg" 
              alt="Law Firm Office" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
