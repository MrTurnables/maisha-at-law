export default function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Cases Won</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-sm opacity-90">Satisfied Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
