import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src="/android-chrome-192x192.png" alt="Maisha at Law" width={40} height={40} />
            </Link>
            <span className="text-xl font-bold text-primary">Maisha at Law</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#practice-areas" className="text-foreground hover:text-primary transition-colors">Practice Areas</Link>
            <Link href="#team" className="text-foreground hover:text-primary transition-colors">Our Team</Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
          <Button asChild>
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
