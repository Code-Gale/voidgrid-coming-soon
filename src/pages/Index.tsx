import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, ArrowRight, Clock, Users, Rocket } from 'lucide-react';
import Layout from '@/components/Layout';
import Countdown from '@/components/Countdown';
import DashboardPreview from '@/components/DashboardPreview';
import AnimatedSection from '@/components/AnimatedSection';
import FeatureCard from '@/components/FeatureCard';
import LoadingButton from '@/components/LoadingButton';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PricingCalculator from '@/components/PricingCalculator';
import FeatureComparison from '@/components/FeatureComparison';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import SocialSharing from '@/components/SocialSharing';
import LeadScoring from '@/components/LeadScoring';
import CommunityStats from '@/components/CommunityStats';
import TypingAnimation from '@/components/TypingAnimation';
import ProgressBar from '@/components/ProgressBar';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import ThreeDCard from '@/components/3DCard';

const waitlistSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistForm) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: 'Welcome to the waitlist!',
        description: "We'll notify you when VoidGrid launches.",
      });
      reset();
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy in seconds with our optimized edge infrastructure.'
    },
    {
      icon: Users,
      title: 'Developer First',
      description: 'Built by developers, for developers. Git deploy, CLI, and more.'
    },
    {
      icon: Rocket,
      title: 'Scale Ready',
      description: 'From prototype to production, scale seamlessly with zero downtime.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-500/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Launch Badge */}
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Clock className="w-4 h-4 mr-2 animate-pulse-slow" />
              Launching Soon
            </div>
          </AnimatedSection>

          {/* Main Heading */}
          <AnimatedSection delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Hosting</span>
              <br />
              <span className="text-foreground">Beyond the Surface</span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={400}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Effortless deployment. Blazing speed. Intelligent control.<br />
              <span className="text-primary font-semibold">VoidGrid</span> is the next-generation hosting platform for modern developers and ambitious teams.
            </p>
          </AnimatedSection>
          
          {/* Countdown Timer */}
          <AnimatedSection delay={600}>
            <div className="mb-12">
              <Countdown />
            </div>
          </AnimatedSection>

          {/* Waitlist Form */}
          <AnimatedSection delay={800}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12" aria-label="Waitlist Form" noValidate>
              <div className="w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
                  aria-label="Email address"
                  {...register('email')}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1" aria-live="polite">{errors.email.message}</p>
                )}
              </div>
              <LoadingButton 
                type="submit" 
                isLoading={isLoading}
                loadingText="Joining..."
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover:shadow-lg hover:shadow-primary/25"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </LoadingButton>
            </form>
          </AnimatedSection>
          
          {/* CTA Links */}
          <AnimatedSection delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/features" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
              >
                Explore Features
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/roadmap" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
              >
                View Roadmap
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border bg-background/80" aria-label="Features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose VoidGrid?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 200}>
                <FeatureCard {...feature} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <AnimatedSection>
        <section className="py-20 border-t border-border" aria-label="How it Works">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">How VoidGrid Works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-decimal list-inside">
              <li className="glass-card p-8 text-center">
                <span className="block text-4xl mb-4">🚀</span>
                <h3 className="text-xl font-semibold mb-2">Connect Your Repo</h3>
                <p className="text-muted-foreground">Link your GitHub or GitLab repository in seconds.</p>
              </li>
              <li className="glass-card p-8 text-center">
                <span className="block text-4xl mb-4">⚡</span>
                <h3 className="text-xl font-semibold mb-2">Configure & Deploy</h3>
                <p className="text-muted-foreground">Set your build settings and deploy with a single click.</p>
              </li>
              <li className="glass-card p-8 text-center">
                <span className="block text-4xl mb-4">🌐</span>
                <h3 className="text-xl font-semibold mb-2">Scale Instantly</h3>
                <p className="text-muted-foreground">Your app is live on the edge, ready to scale globally.</p>
              </li>
            </ol>
          </div>
        </section>
      </AnimatedSection>

      {/* Dashboard Preview Section */}
      <section className="py-20 border-t border-border bg-background/80" aria-label="Dashboard Preview">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Preview the Dashboard</h2>
            <p className="text-muted-foreground mb-8">Intuitive, powerful, and beautiful. Manage your projects, deployments, and analytics in one place.</p>
          </AnimatedSection>
          <DashboardPreview />
        </div>
      </section>

      {/* Pricing Table Section */}
      <AnimatedSection>
        <section className="py-20 border-t border-border" aria-label="Pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">VoidGrid Pricing Table</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-xl overflow-hidden text-sm md:text-base">
                <thead>
                  <tr className="bg-primary/10 text-primary">
                    <th className="p-4 font-bold text-left">Plan Name</th>
                    <th className="p-4 font-bold text-left">EdgeStarter (Free)</th>
                    <th className="p-4 font-bold text-left">EdgeCore (Starter Paid)</th>
                    <th className="p-4 font-bold text-left">PulseGrid (Mid Tier)</th>
                    <th className="p-4 font-bold text-left">InfinityForge (Power Users)</th>
                  </tr>
                </thead>
                <tbody className="bg-background/80">
                  <tr><td className="p-4 font-semibold">Price</td><td className="p-4">Free</td><td className="p-4">$1.50 / month</td><td className="p-4">$4.50 / month</td><td className="p-4">$8.00 / month</td></tr>
                  <tr><td className="p-4 font-semibold">CPU</td><td className="p-4">0.3 vCPU (Shared)</td><td className="p-4">0.5 vCPU (Shared)</td><td className="p-4">1 vCPU (Shared)</td><td className="p-4">1.5 vCPU (Shared)</td></tr>
                  <tr><td className="p-4 font-semibold">Memory (RAM)</td><td className="p-4">256 MB</td><td className="p-4">512 MB</td><td className="p-4">1 GB</td><td className="p-4">2 GB</td></tr>
                  <tr><td className="p-4 font-semibold">Storage</td><td className="p-4">500 MB SSD</td><td className="p-4">2 GB SSD</td><td className="p-4">10 GB SSD</td><td className="p-4">25 GB SSD</td></tr>
                  <tr><td className="p-4 font-semibold">Bandwidth</td><td className="p-4">5 GB / Month</td><td className="p-4">20 GB / Month</td><td className="p-4">100 GB / Month</td><td className="p-4">500 GB / Month</td></tr>
                  <tr><td className="p-4 font-semibold">Database</td><td className="p-4">1 Shared MongoDB (Limited)</td><td className="p-4">1 Shared MongoDB</td><td className="p-4">1 Dedicated MongoDB</td><td className="p-4">Multi-DB Support</td></tr>
                  <tr><td className="p-4 font-semibold">Custom Domain</td><td className="p-4">Not Available</td><td className="p-4">Available</td><td className="p-4">Available</td><td className="p-4">Available</td></tr>
                  <tr><td className="p-4 font-semibold">Build Minutes</td><td className="p-4">300 min / Month</td><td className="p-4">600 min / Month</td><td className="p-4">1200 min / Month</td><td className="p-4">Unlimited</td></tr>
                  <tr><td className="p-4 font-semibold">Auto-Sleep</td><td className="p-4">15 min inactivity</td><td className="p-4">30 min inactivity</td><td className="p-4">No Sleep</td><td className="p-4">No Sleep</td></tr>
                  <tr><td className="p-4 font-semibold">Cold Start</td><td className="p-4">~10s</td><td className="p-4">~5s</td><td className="p-4">Near-Instant</td><td className="p-4">Instant</td></tr>
                  <tr><td className="p-4 font-semibold">SSL/HTTPS</td><td className="p-4">Included</td><td className="p-4">Included</td><td className="p-4">Included</td><td className="p-4">Included</td></tr>
                  <tr><td className="p-4 font-semibold">Git Deploy</td><td className="p-4">Included</td><td className="p-4">Included</td><td className="p-4">Included</td><td className="p-4">Included</td></tr>
                  <tr><td className="p-4 font-semibold">Monitoring</td><td className="p-4">Basic</td><td className="p-4">Basic</td><td className="p-4">Advanced</td><td className="p-4">Advanced</td></tr>
                  <tr><td className="p-4 font-semibold">Support</td><td className="p-4">Community</td><td className="p-4">Email Support</td><td className="p-4">Priority Email Support</td><td className="p-4">Priority + Dedicated Support</td></tr>
                  <tr><td className="p-4 font-semibold">Use Case</td><td className="p-4">Hobby, Portfolio, Experiments</td><td className="p-4">Small Projects, Early Stage Startups</td><td className="p-4">Growing Apps, Production Workloads</td><td className="p-4">High-Traffic, Resource-Intensive Projects</td></tr>
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-4">Note: This is a draft. Features and pricing may change before launch.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="py-20 border-t border-border bg-background/80" aria-label="FAQ">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <details className="glass-card p-6 group" open>
                <summary className="cursor-pointer text-lg font-semibold text-primary group-open:text-white transition-colors">What is VoidGrid?</summary>
                <p className="mt-2 text-muted-foreground">VoidGrid is a next-generation hosting platform designed for speed, simplicity, and scalability. Deploy your apps to the edge in seconds.</p>
              </details>
              <details className="glass-card p-6 group">
                <summary className="cursor-pointer text-lg font-semibold text-primary group-open:text-white transition-colors">How do I join the waitlist?</summary>
                <p className="mt-2 text-muted-foreground">Simply enter your email in the waitlist form above and you'll be notified when we launch.</p>
              </details>
              <details className="glass-card p-6 group">
                <summary className="cursor-pointer text-lg font-semibold text-primary group-open:text-white transition-colors">Can I use a custom domain?</summary>
                <p className="mt-2 text-muted-foreground">Custom domains are available on paid plans. See the pricing table for details.</p>
              </details>
              <details className="glass-card p-6 group">
                <summary className="cursor-pointer text-lg font-semibold text-primary group-open:text-white transition-colors">What databases are supported?</summary>
                <p className="mt-2 text-muted-foreground">We support MongoDB out of the box, with more databases coming soon.</p>
              </details>
              <details className="glass-card p-6 group">
                <summary className="cursor-pointer text-lg font-semibold text-primary group-open:text-white transition-colors">Is there a free plan?</summary>
                <p className="mt-2 text-muted-foreground">Yes! EdgeStarter is our free tier, perfect for hobby projects and experiments.</p>
              </details>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Community Stats Section */}
      <AnimatedSection>
        <CommunityStats />
      </AnimatedSection>

      {/* Pricing Calculator Section */}
      <AnimatedSection>
        <PricingCalculator />
      </AnimatedSection>

      {/* Feature Comparison Section */}
      <AnimatedSection>
        <FeatureComparison />
      </AnimatedSection>

      {/* Interactive Timeline Section */}
      <AnimatedSection>
        <InteractiveTimeline />
      </AnimatedSection>

      {/* Social Sharing Section */}
      <AnimatedSection>
        <SocialSharing />
      </AnimatedSection>

      {/* Lead Scoring Section */}
      <AnimatedSection>
        <LeadScoring />
      </AnimatedSection>

      {/* Typing Animation Demo */}
      <AnimatedSection>
        <section className="py-20 border-t border-border bg-background/80" aria-label="Typing Demo">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">See VoidGrid in Action</h2>
            <TypingAnimation />
          </div>
        </section>
      </AnimatedSection>

      {/* 3D Card Demo */}
      <AnimatedSection>
        <section className="py-20 border-t border-border" aria-label="3D Cards">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Interactive Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ThreeDCard
                className="p-8 text-center"
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Lightning Fast</h3>
                <p className="text-muted-foreground">Deploy in seconds with our optimized edge infrastructure.</p>
              </ThreeDCard>
              <ThreeDCard
                className="p-8 text-center"
              >
                <div className="text-4xl mb-4">👨‍💻</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Developer First</h3>
                <p className="text-muted-foreground">Built by developers, for developers. Git deploy, CLI, and more.</p>
              </ThreeDCard>
              <ThreeDCard
                className="p-8 text-center"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Scale Ready</h3>
                <p className="text-muted-foreground">From prototype to production, scale seamlessly with zero downtime.</p>
              </ThreeDCard>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Progress Bar Demo */}
      <AnimatedSection>
        <section className="py-20 border-t border-border bg-background/80" aria-label="Progress Demo">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">Community Growth</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Waitlist Progress</h3>
                <ProgressBar current={2847} total={5000} label="Developers" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Loading Experience</h3>
                <LoadingSkeleton />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Polish & Delight Section */}
      <AnimatedSection>
        <section className="py-20 border-t border-border" aria-label="Polish and Delight">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Built to Delight</h2>
            <p className="text-muted-foreground mb-8">Enjoy microinteractions, beautiful gradients, and a smooth, modern experience. We obsess over the details so you can focus on building.</p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-bounce">✨ Microinteractions</span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium animate-pulse">🎨 Gradients</span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium animate-fade-in">⚡ Fast Loads</span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-spin-slow">🛸 Modern UI</span>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
