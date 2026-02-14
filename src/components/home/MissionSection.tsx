import { Target, Eye, Scroll } from "lucide-react";

export function MissionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div
            className="bg-card rounded-2xl p-8 border border-border card-hover opacity-0 animate-fade-up"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A united and inclusive Canada where diverse communities thrive together 
              with dignity and respect — where your background is celebrated and your 
              future is full of possibility.
            </p>
          </div>

          {/* Mission */}
          <div
            className="bg-card rounded-2xl p-8 border border-border card-hover opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower and support multicultural communities in Canada through inclusion, 
              cultural pride, equal opportunity, and meaningful engagement — because everyone 
              deserves a fair chance to thrive.
            </p>
          </div>

          {/* Mandate */}
          <div
            className="bg-card rounded-2xl p-8 border border-border card-hover opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <Scroll className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Commitment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We deliver culturally-responsive programs that meet people where they are — 
              advocating for equity, partnering with communities, and creating real, 
              lasting change in the lives of newcomers and families across Canada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
