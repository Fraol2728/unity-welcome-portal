import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Scroll, Heart, Users, Handshake, Sparkles, Scale, PartyPopper, Goal, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const values = [
  { icon: Heart, title: "Inclusion", description: "Everyone belongs. We create welcoming spaces where all cultures, identities, and backgrounds are respected and celebrated." },
  { icon: Scale, title: "Equity", description: "Fair access for all. We actively work to remove barriers so every person has the opportunity to succeed and contribute." },
  { icon: Handshake, title: "Collaboration", description: "Better together. We partner with communities, organizations, and governments to create solutions that truly work." },
  { icon: Sparkles, title: "Youth Empowerment", description: "Investing in the next generation. We equip young people with confidence, skills, and mentorship to become community leaders." },
  { icon: PartyPopper, title: "Cultural Celebration", description: "Diversity makes us stronger. We honour the traditions, languages, and stories that enrich our shared Canadian identity." },
];

const boardMembers = [
  {
    name: "Dr. Amara Johnson",
    role: "Board Chair",
    bio: "With 25 years in humanitarian development and policy advocacy, Dr. Johnson brings deep expertise and a passionate commitment to inclusive community building.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Chen",
    role: "Vice Chair",
    bio: "Marcus's background in community development and nonprofit leadership ensures our programs stay grounded in the real needs of the people we serve.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Secretary",
    bio: "A former newcomer herself, Fatima brings invaluable lived experience and a deep understanding of the challenges and hopes that newcomers carry with them.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Okonkwo",
    role: "Treasurer",
    bio: "David's financial expertise in the nonprofit sector ensures our resources are managed with integrity, transparency, and maximum community impact.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sofia Martinez",
    role: "Board Member",
    bio: "Sofia brings expertise in education and skills development, shaping programs that open real doors for newcomers entering the Canadian workforce.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. James Adeyemi",
    role: "Board Member",
    bio: "A mental health professional, Dr. Adeyemi ensures our wellness programs are culturally responsive and centred on healing, resilience, and dignity.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Building a Canada Where Everyone Belongs
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unity Settlement Welcome Agency stands with newcomers, multicultural communities, 
              and youth — providing the support, connection, and opportunities needed to thrive 
              in Canada with dignity and pride.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-secondary mx-auto mb-6 opacity-60" />
            <blockquote className="font-display text-2xl sm:text-3xl font-medium text-primary-foreground leading-relaxed mb-6">
              "We believe that when communities come together — when we celebrate what makes us 
              different and invest in what connects us — everyone is better for it. That's the 
              Canada we're building, one person, one family, one neighbourhood at a time."
            </blockquote>
            <p className="text-secondary font-medium">— The Unity Settlement Leadership Team</p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal, Mandate */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A united and inclusive Canada where diverse communities thrive together with 
                    dignity and respect. We see a future where every newcomer feels at home, 
                    every culture is celebrated, and every person has the chance to contribute 
                    to something greater than themselves.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower and support multicultural communities in Canada through inclusion, 
                    cultural pride, equal opportunity, and meaningful engagement. We walk alongside 
                    newcomers, youth, and families — helping them build confidence, connections, 
                    and the skills they need to thrive.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Goal className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Goal</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To create lasting, positive change by delivering programs that truly meet people 
                    where they are. We help individuals and families build independence, form meaningful 
                    relationships, and fully participate in the rich fabric of Canadian life.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Scroll className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mandate</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver culturally-responsive services that address the real needs of newcomers 
                    and multicultural communities. We advocate for equity and inclusion, partner with 
                    community organizations, and work tirelessly to ensure everyone we serve receives 
                    the care and support they deserve.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={teamPhoto}
                alt="Unity Settlement team members collaborating together"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-lg p-6">
                <div className="text-4xl font-display font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Lives Touched Every Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Values That Drive Our Work
            </h2>
            <p className="text-lg text-muted-foreground">
              These aren't just principles — they're promises we make to every person and community we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-card border border-border card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
              Our Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The People Behind Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our board members bring diverse expertise, lived experience, and a shared commitment 
              to building inclusive communities where newcomers and multicultural families can thrive.
            </p>
            <div className="bg-warm-gradient rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                📅 <strong>Upcoming Meeting:</strong> February 3rd at 9:00 AM — Join us as we 
                discuss our evolving identity and plans for the future!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden card-hover border border-border opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl px-8 py-16 md:px-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you want to volunteer your time, contribute resources, or partner with us — 
              your support helps build a more welcoming Canada for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="warm" size="xl" asChild>
                <Link to="/contact">
                  Get Involved
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
