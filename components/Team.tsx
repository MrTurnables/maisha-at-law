import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Heart, Scale, Shield } from "lucide-react";

const attorney = {
  name: "Taiba Mashoud",
  role: "Managing Partner",
  image: "/img3.jpg",
  bio: "Taiba leads our firm with dedication to excellence and client satisfaction.",
  specializations: ["Corporate Law", "Business Litigation", "Mergers & Acquisitions"]
};

const coreValues = [
  {
    icon: Shield,
    title: "Integrity & Ethics",
    description: "We uphold the highest standards of professional ethics and integrity in every case we handle, ensuring transparent and honest legal counsel."
  },
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description: "Your success is our priority. We provide personalized attention and tailored legal strategies that address your unique needs and goals."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Attorney
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing exceptional legal representation with integrity and excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Attorney Card */}
          <Card className="overflow-hidden">
            <div className="relative h-80">
              <Image 
                src={attorney.image} 
                alt={attorney.name} 
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{attorney.name}</CardTitle>
              <CardDescription className="text-primary font-medium">{attorney.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{attorney.bio}</p>
              <div className="text-xs text-muted-foreground">
                <div className="font-semibold mb-1">Specializations:</div>
                <div>{attorney.specializations.join(", ")}</div>
              </div>
            </CardContent>
          </Card>

          {/* Core Values Cards */}
          {coreValues.map((value, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
