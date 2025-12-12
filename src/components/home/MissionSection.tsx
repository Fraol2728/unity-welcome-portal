import { Heart, Globe, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We approach every individual with empathy, understanding, and genuine care for their wellbeing.",
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "We celebrate diversity and honor the unique backgrounds and traditions of those we serve.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "We create connections that transform strangers into neighbors and neighbors into family.",
  },
  {
    icon: Shield,
    title: "Safe Haven",
    description: "We provide a secure, welcoming environment where everyone can feel protected and valued.",
  },
];

export function MissionSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Mission
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Empowering New Beginnings with Dignity and Hope
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that every person deserves the opportunity to build a fulfilling life. 
            Our mission is to provide comprehensive support that helps newcomers navigate their journey 
            while preserving their identity and dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 text-center card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
