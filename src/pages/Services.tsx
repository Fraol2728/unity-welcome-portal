import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Home, BookOpen, Users, FileText, Heart, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Settlement & Orientation",
    shortDesc: "Your first steps in a new community, made easier",
    fullDesc: "Starting fresh in a new country can feel overwhelming. We're here to help you navigate the basics — from finding safe, affordable housing to understanding how local services work. Our settlement workers provide one-on-one guidance so you never have to figure it out alone.",
    features: [
      "Help finding housing and understanding leases",
      "Orientation to local services, transit, and healthcare",
      "Support with opening bank accounts and setting up essentials",
      "School registration guidance for children",
      "Connection to community resources near you",
    ],
  },
  {
    icon: BookOpen,
    title: "Language & Skills Training",
    shortDesc: "Build confidence through language and learning",
    fullDesc: "Language opens doors — to jobs, friendships, and everyday independence. Our programs meet you at your level and help you grow at your own pace. Whether you're just starting out or want to strengthen your professional English, we've got a class for you.",
    features: [
      "English classes for beginners through advanced learners",
      "Workplace-focused language training",
      "Computer literacy and digital skills programs",
      "Job-specific skills workshops",
      "Support with credential recognition in Canada",
    ],
  },
  {
    icon: Users,
    title: "Community Integration Programs",
    shortDesc: "Find your people and feel at home",
    fullDesc: "Belonging isn't just about where you live — it's about who you know and how connected you feel. Our community programs create real opportunities to meet neighbours, share your culture, and build friendships that make Canada feel like home.",
    features: [
      "Cultural orientation and exchange workshops",
      "One-on-one community mentorship matching",
      "Social events, outings, and recreational activities",
      "Multicultural festivals and community celebrations",
      "Volunteer opportunities to give back and connect",
    ],
  },
  {
    icon: FileText,
    title: "Legal & Documentation Support",
    shortDesc: "Navigate paperwork with confidence",
    fullDesc: "Immigration systems are complex, and the paperwork can feel endless. Our team helps you understand your options, organize your documents, and connect with trusted legal professionals when you need them. You don't have to do this alone.",
    features: [
      "Immigration document preparation and review",
      "Status and application support",
      "Know-your-rights education sessions",
      "Referrals to trusted immigration lawyers",
      "Assistance completing forms and applications",
    ],
  },
  {
    icon: Heart,
    title: "Wellness & Mental Health",
    shortDesc: "Healing, resilience, and emotional support",
    fullDesc: "The journey of starting over can take a real toll on your wellbeing. Our culturally-sensitive counseling services offer a safe, judgment-free space to process your experiences, build resilience, and find strength — for yourself and your family.",
    features: [
      "Individual and family counseling",
      "Support groups for shared experiences",
      "Youth mental health programs",
      "Wellness workshops and stress-relief activities",
      "Trauma-informed care approaches",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment & Career Support",
    shortDesc: "Find meaningful work that matches your skills",
    fullDesc: "Getting a job in a new country means learning new systems, networks, and expectations. Our employment team supports you from resume writing to interview prep to job placement — helping you find work that values your experience and talents.",
    features: [
      "Resume and cover letter writing support",
      "Interview coaching and practice sessions",
      "Job search strategies for the Canadian market",
      "Networking events and employer connections",
      "Career planning and professional development",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Real Support for Real People
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From your first day in Canada to long-term success, we offer practical, compassionate 
              services designed to help you and your family build a life with confidence and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left side */}
                  <div className="lg:col-span-2 bg-primary/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Right side */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.fullDesc}
                    </p>
                    <h3 className="font-semibold text-foreground mb-4">What You Can Expect:</h3>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              That's completely okay. Reach out and we'll help you figure out which services are 
              right for you — no pressure, no judgment, just a friendly conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="warm" size="xl" asChild>
                <Link to="/contact">
                  Talk to Us Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
