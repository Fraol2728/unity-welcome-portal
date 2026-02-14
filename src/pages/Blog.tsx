import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "welcoming-new-families-summer-2024",
    title: "50 Families Found a New Home This Summer — Here's How",
    excerpt: "This summer, our community came together to welcome 50 newcomer families from around the world. Their stories of courage and hope remind us why this work matters.",
    category: "Community Stories",
    author: "Sarah Mitchell",
    date: "December 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    slug: "language-program-200-graduates",
    title: "200 Graduates and Counting: Language Program Milestone",
    excerpt: "Our English language program celebrated a major milestone this month. Meet some of the graduates whose determination and hard work inspired everyone around them.",
    category: "Youth & Education",
    author: "Maria Santos",
    date: "November 28, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    slug: "mental-health-resources-newcomers",
    title: "Why Mental Health Matters for Newcomers — And How We Help",
    excerpt: "Starting over in a new country is exciting but also emotionally challenging. Learn about our expanded counseling services designed for newcomer families and youth.",
    category: "Newcomer Resources",
    author: "Dr. James Chen",
    date: "November 15, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    slug: "volunteer-spotlight-december",
    title: "Volunteer Spotlight: The People Who Make It All Possible",
    excerpt: "This month we celebrate three incredible volunteers who have gone above and beyond. Their dedication to newcomer families is truly inspiring.",
    category: "Community Stories",
    author: "Ahmed Hassan",
    date: "November 8, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    slug: "career-workshop-series-newcomers",
    title: "New Workshop Series: Building Your Career in Canada",
    excerpt: "Starting in January, our comprehensive career workshops will help newcomers navigate the Canadian job market with confidence — from resumes to interviews to networking.",
    category: "Youth & Education",
    author: "James Okonkwo",
    date: "October 30, 2024",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    slug: "community-partners-thank-you",
    title: "Thank You to the Partners Who Make Our Work Possible",
    excerpt: "None of this happens alone. Join us in celebrating the organizations, businesses, and community leaders who help us serve newcomers every day.",
    category: "Community Stories",
    author: "Sarah Mitchell",
    date: "October 20, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Community Stories", "Youth & Education", "Newcomer Resources"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Stories That Inspire, Updates That Matter
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real stories from our community, practical resources for newcomers, and updates 
              on the programs and events that bring us together.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:bg-transparent">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Stay Connected With Our Community
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get inspiring stories, event invitations, and helpful resources delivered to 
              your inbox — no spam, just the good stuff.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button variant="warm" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
