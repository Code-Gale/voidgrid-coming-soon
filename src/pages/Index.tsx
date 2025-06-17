
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, ArrowRight, Clock, Users, Rocket } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you when VoidGrid launches.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-500/10" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Launch Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Clock className="w-4 h-4 mr-2" />
            Launching Soon
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Hosting</span>
            <br />
            <span className="text-white">Beyond the Surface</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            VoidGrid is the next-generation hosting platform offering effortless deployment, 
            blazing speed, and intelligent control.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12 animate-fade-in">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-white/20 text-white placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* CTA Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link 
              to="/features" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Explore Features
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link 
              to="/roadmap" 
              className="inline-flex items-center text-muted-foreground hover:text-white transition-colors"
            >
              View Roadmap
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-card p-8 hover:glow-effect transition-all duration-300">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Deploy in seconds with our optimized infrastructure</p>
            </div>
            <div className="text-center glass-card p-8 hover:glow-effect transition-all duration-300">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Developer First</h3>
              <p className="text-muted-foreground">Built by developers, for developers</p>
            </div>
            <div className="text-center glass-card p-8 hover:glow-effect transition-all duration-300">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Scale Ready</h3>
              <p className="text-muted-foreground">From prototype to production, seamlessly</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
