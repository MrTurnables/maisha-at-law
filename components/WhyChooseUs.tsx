import { Award, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Experienced Team",
    description: "Our attorneys have decades of combined experience handling complex legal matters with proven success."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Legal emergencies don't wait. We're available around the clock to address your urgent legal needs."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every client receives individualized attention and a tailored legal strategy for their unique situation."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Maisha At Law
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence and client satisfaction sets us apart in the legal industry.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
