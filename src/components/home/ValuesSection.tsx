import { Heart, Users, Handshake, Sparkles, Scale, PartyPopper } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Inclusion",
    description: "Everyone belongs here. We create spaces where all cultures, identities, and voices are welcomed and valued.",
  },
  {
    icon: Scale,
    title: "Equity",
    description: "Fair access for all. We work to remove barriers so every person has the opportunity to succeed.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Stronger together. We partner with communities, organizations, and leaders to multiply our impact.",
  },
  {
    icon: Sparkles,
    title: "Youth Empowerment",
    description: "Investing in tomorrow. We equip young people with the skills, confidence, and connections to lead.",
  },
  {
    icon: PartyPopper,
    title: "Cultural Celebration",
    description: "Diversity is our strength. We honour the traditions, languages, and stories that make our community vibrant.",
  },
];

export function ValuesSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            What We Stand For
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Values That Shape Everything We Do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These aren't just words on a page — they guide every program we build, 
            every conversation we have, and every community we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 text-center card-hover opacity-0 animate-fade-up border border-border"
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
