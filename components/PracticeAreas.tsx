import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Shield, Users, BookOpen, Award } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Corporate Law",
    description: "Comprehensive business legal solutions for companies of all sizes.",
    services: ["Business Formation", "Contract Drafting", "Mergers & Acquisitions", "Corporate Governance"]
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate guidance through family legal matters.",
    services: ["Divorce & Separation", "Child Custody", "Adoption", "Prenuptial Agreements"]
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Aggressive representation to protect your rights and freedom.",
    services: ["DUI Defense", "White Collar Crimes", "Drug Offenses", "Appeals"]
  },
  {
    icon: BookOpen,
    title: "Real Estate Law",
    description: "Expert guidance for all your real estate transactions.",
    services: ["Property Transactions", "Lease Agreements", "Zoning Issues", "Title Disputes"]
  },
  {
    icon: Award,
    title: "Personal Injury",
    description: "Fighting for the compensation you deserve after an injury.",
    services: ["Car Accidents", "Medical Malpractice", "Workplace Injuries", "Product Liability"]
  },
  {
    icon: BookOpen,
    title: "Estate Planning",
    description: "Secure your legacy and protect your loved ones.",
    services: ["Wills & Trusts", "Power of Attorney", "Probate", "Asset Protection"]
  }
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide expert legal services across a wide range of practice areas, ensuring comprehensive support for all your legal needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
