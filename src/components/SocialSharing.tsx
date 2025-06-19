
import { Share2, Twitter, Facebook, Linkedin, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from './AnimatedSection';

const SocialSharing = () => {
  const { toast } = useToast();
  const shareUrl = window.location.href;
  const shareText = "Check out VoidGrid - the next-generation hosting platform for modern developers!";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: 'Link copied!',
        description: 'Share link copied to clipboard.',
      });
    } catch (err) {
      toast({
        title: 'Copy failed',
        description: 'Could not copy link to clipboard.',
        variant: 'destructive',
      });
    }
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section className="py-20 border-t border-border bg-background/80" aria-label="Social Sharing">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Spread the Word
          </h2>
          <p className="text-muted-foreground mb-8">
            Help us grow our community by sharing VoidGrid with your network!
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {shareLinks.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              className={`flex items-center gap-2 ${social.color} transition-colors`}
              onClick={() => window.open(social.url, '_blank')}
            >
              <social.icon className="h-4 w-4" />
              {social.name}
            </Button>
          ))}
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4" />
            Copy Link
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSharing;
