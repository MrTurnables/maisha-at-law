import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/">
                <Image src="/android-chrome-white-192x192.png" alt="Maisha At Law" width={40} height={40} />
              </Link>
              <span className="text-xl font-bold">Maisha At Law</span>
            </div>
            <p className="text-sm opacity-80">
              Providing exceptional legal services with integrity and dedication.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="#about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="#practice-areas" className="hover:opacity-100 transition-opacity">Practice Areas</Link></li>
              {/* <li><Link href="#team" className="hover:opacity-100 transition-opacity">Our Team</Link></li> */}
              <li><Link href="#contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Corporate Law</li>
              <li>Family Law</li>
              <li>Criminal Defense</li>
              <li>Real Estate</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+233 303 983 201</li>
              <li>+233 203 421 113</li>
              <li>info@maishaatlaw.com</li>
              <li>Mon-Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Maisha At Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
