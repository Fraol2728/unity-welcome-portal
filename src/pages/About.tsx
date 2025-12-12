import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const values = [
  { icon: Heart, title: "Compassion", description: "Leading with empathy in everything we do" },
  { icon: Users, title: "Community", description: "Building connections that last a lifetime" },
  { icon: Globe, title: "Inclusion", description: "Celebrating diversity and embracing all cultures" },
  { icon: Shield, title: "Integrity", description: "Acting with honesty and transparency" },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Executive Director",
    bio: "With 20 years in humanitarian work, Sarah leads our mission with passion and vision.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Okonkwo",
    role: "Program Director",
    bio: "James brings lived experience as a former refugee to guide our programs with authenticity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Maria Santos",
    role: "Community Outreach Manager",
    bio: "Maria connects newcomers with resources and builds bridges within our community.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ahmed Hassan",
    role: "Legal Services Coordinator",
    bio: "Ahmed ensures every individual receives proper legal guidance and documentation support.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
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
              Building Bridges to New Beginnings
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2005, Unity Settlement Welcome Agency has been a beacon of hope for refugees, 
              immigrants, and vulnerable communities seeking to build new lives with dignity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower refugees, immigrants, and vulnerable individuals to achieve self-sufficiency 
                    and integration through comprehensive support services, education, and community building. 
                    We believe that with the right support, every person can thrive.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every person, regardless of their origin, has the opportunity 
                    to build a safe, dignified, and fulfilling life. We envision communities 
                    that embrace diversity as strength and welcome newcomers as neighbors.
                  </p>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={teamPhoto}
                alt="Unity Settlement team members"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-lg p-6">
                <div className="text-4xl font-display font-bold text-primary">18+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-secondary font-medium text-sm mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-8">
              From Humble Beginnings to Community Impact
            </h2>
            <div className="space-y-6 text-primary-foreground/85 leading-relaxed">
              <p>
                Unity Settlement Welcome Agency was founded in 2005 by a group of dedicated volunteers 
                who saw the struggles that newcomers faced when arriving in our city. What started as 
                a small group meeting in a church basement has grown into a full-service organization 
                serving over 5,000 individuals annually.
              </p>
              <p>
                Our founder, Dr. Sarah Mitchell, herself the daughter of immigrants, understood firsthand 
                the challenges of building a new life in an unfamiliar place. She envisioned an organization 
                that would not just provide services, but truly welcome newcomers as valued members of our community.
              </p>
              <p>
                Today, we operate from our Community Welcome Center in the heart of Toronto, with a team 
                of 45 dedicated staff members and over 200 volunteers. We have helped thousands of families 
                find housing, learn new skills, secure employment, and most importantly, find a sense of 
                belonging in their new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Principles That Guide Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Team */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Team
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the People Behind Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              Our diverse team brings together expertise, lived experience, and a shared commitment 
              to making a difference in the lives of newcomers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-warm-gradient rounded-3xl px-8 py-16 md:px-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you want to volunteer, donate, or partner with us, your support can change lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" asChild>
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-foreground/30 hover:bg-foreground/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
