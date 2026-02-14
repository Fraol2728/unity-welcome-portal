import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "When we arrived in Canada, we didn't know where to begin. Unity Settlement didn't just help us find a home — they helped us find a community. We finally feel like we belong.",
    name: "Amara K.",
    role: "Newcomer from Syria",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "The language program changed everything for me. In one year, I went from feeling invisible to landing my first job. The team treated me like family — I'll never forget that kindness.",
    name: "Miguel R.",
    role: "Newcomer from Venezuela",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "They helped with my paperwork, listened when I needed to talk, and never made me feel like a number. This organization genuinely cares about the whole person — not just the process.",
    name: "Fatima A.",
    role: "Newcomer from Afghanistan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-secondary font-medium text-sm mb-4">
            Real Stories, Real Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Hear From Our Community
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Behind every service is a real person with a real story. These are some of the voices 
            that remind us why this work matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <Quote className="w-10 h-10 text-secondary mb-6" />
              <p className="text-primary-foreground/90 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, community member`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
