import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Maisha at Law provided exceptional service during my business acquisition. Their attention to detail and expertise made the process smooth and successful.",
    name: "Robert Thompson",
    case: "Business Acquisition"
  },
  {
    quote: "I couldn't have asked for better representation. The team was professional, responsive, and fought hard for my rights throughout my case.",
    name: "Jennifer Martinez",
    case: "Personal Injury"
  },
  {
    quote: "Going through a divorce was difficult, but having Maisha at Law by my side made all the difference. They were compassionate and effective.",
    name: "David Wilson",
    case: "Family Law"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about their experience with Maisha at Law.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <CardDescription className="text-base italic">"{testimonial.quote}"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.case}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
