
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Home, ArrowLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated 404 */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-br from-primary via-purple-500 to-green-500 bg-clip-text animate-glow">
                404
              </h1>
              <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-primary/10 blur-sm">
                404
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Lost in the <span className="text-gradient">Void</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              The page you're looking for seems to have drifted into the digital void. 
              Let's get you back to solid ground.
            </p>
          </div>

          {/* Glitch Effect */}
          <div className="mb-8 animate-float">
            <div className="relative inline-block">
              <Zap className="h-16 w-16 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="border-white/20 text-white hover:bg-white/10"
            >
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="mt-12 glass-card p-6 animate-slide-in">
            <h3 className="text-lg font-semibold text-white mb-2">Still need help?</h3>
            <p className="text-muted-foreground mb-4">
              If you believe this is an error, please let us know.
            </p>
            <Link 
              to="/contact" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
