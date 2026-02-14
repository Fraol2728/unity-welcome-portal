import { Link } from "react-router-dom";
import { ArrowRight, Home, BookOpen, Users, FileText, Heart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Settlement & Orientation",
    description: "Find your footing with housing support, local orientation, and help navigating everyday essentials in your new community.",
  },
  {
    icon: Briefcase,
    title: "Employment & Education",
    description: "Build your career with resume help, job search support, skills training, and credential recognition guidance.",
  },
  {
    icon: BookOpen,
    title: "Language & Skills Training",
    description: "Grow your confidence with English classes at every level, computer literacy programs, and workplace language coaching.",
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Connect with your neighbours through cultural events, mentorship programs, and activities that bring people together.",
  },
  {
    icon: FileText,
    title: "Legal & Documentation",
    description: "Get guidance with immigration paperwork, understand your rights, and access referrals to trusted legal professionals.",
  },
  {
    icon: Heart,
    title: "Wellness & Mental Health",
    description: "Access counseling, support groups, and wellness programs designed to help you heal, grow, and feel supported.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              How We Help
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Support That Meets You Where You Are
            </h2>
            <p className="text-lg text-muted-foreground">
              From your first day in Canada to long-term success, we're here with practical help 
              and genuine care at every step of your journey.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group bg-card border border-border rounded-2xl p-8 card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
