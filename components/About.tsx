import Image from "next/image";
import { Shield, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image 
              src="/img2.jpg" 
              alt="Professional Legal Office" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Maisha At Law
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded on principles of integrity, excellence, and unwavering commitment to justice, Maisha At Law has been serving individuals and businesses with distinction for over two decades.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of experienced attorneys combines deep legal knowledge with a personalized approach to every case. We understand that legal matters can be overwhelming, which is why we&apos;re dedicated to providing clear guidance and effective representation every step of the way.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Proven Track Record</h3>
                  <p className="text-sm text-muted-foreground">Successful outcomes in complex cases</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Client-Focused</h3>
                  <p className="text-sm text-muted-foreground">Your needs are our priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
