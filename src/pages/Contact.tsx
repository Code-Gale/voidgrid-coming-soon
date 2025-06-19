import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageSquare, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Simulate posting to dummy API endpoint
      // await fetch('https://dummyapi.io/contact', { method: 'POST', body: JSON.stringify(data) });
      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you within 24 hours.",
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

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Get in</span> Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about VoidGrid? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <div className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-white">Send us a message</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      {...register('name')}
                      placeholder="Enter your full name"
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1" aria-live="polite">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      {...register('email')}
                      placeholder="Enter your email address"
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1" aria-live="polite">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell us about your project or questions..."
                      rows={5}
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1" aria-live="polite">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="glass-card p-8">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-white">Direct Contact</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Prefer to reach out directly? Drop us an email and we'll get back to you promptly.
                  </p>
                  <a 
                    href="mailto:hello@voidgrid.com" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    hello@voidgrid.com
                  </a>
                </div>

                {/* Social Links */}
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Follow Our Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with our latest developments and connect with our community.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-12 h-12 bg-background/50 border border-white/20 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-12 h-12 bg-background/50 border border-white/20 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-12 h-12 bg-background/50 border border-white/20 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Questions?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-1">When will VoidGrid launch?</h4>
                      <p className="text-sm text-muted-foreground">We're targeting Q1 2025 for our beta release.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Will there be a free tier?</h4>
                      <p className="text-sm text-muted-foreground">Yes! We'll offer a generous free tier for developers.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Can I get early access?</h4>
                      <p className="text-sm text-muted-foreground">Join our waitlist to be first in line for beta access.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
