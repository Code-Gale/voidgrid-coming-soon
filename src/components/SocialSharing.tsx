import { useState } from 'react';
import { Twitter, Linkedin, Facebook, Link, Check, Share2 } from 'lucide-react';

const SocialSharing = () => {
  const [copied, setCopied] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const url = window.location.href;
  const title = 'VoidGrid - Next-Generation Hosting Platform';
  const description = 'Deploy your applications with unprecedented speed and reliability.';
  const hashtags = ['VoidGrid', 'Hosting', 'WebDevelopment'];

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&hashtags=${hashtags.join(',')}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  const handleShare = (platform: string) => {
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    setShareCount(prev => prev + 1);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying link:', error);
    }
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'hover:bg-blue-500 hover:text-white',
      onClick: () => handleShare('twitter')
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'hover:bg-blue-600 hover:text-white',
      onClick: () => handleShare('linkedin')
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:bg-blue-700 hover:text-white',
      onClick: () => handleShare('facebook')
    },
    {
      name: 'Copy Link',
      icon: copied ? Check : Link,
      color: copied ? 'bg-green-500 text-white' : 'hover:bg-gray-500 hover:text-white',
      onClick: handleCopyLink
    }
  ];

  return (
    <div className="py-8 bg-background/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Share VoidGrid
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us spread the word about the future of hosting
          </p>
        </div>

        <div className="glass-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shareButtons.map((button) => (
              <button
                key={button.name}
                onClick={button.onClick}
                className={`flex flex-col items-center p-4 rounded-lg border border-border transition-all duration-200 ${button.color}`}
              >
                <button.icon className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">{button.name}</span>
              </button>
            ))}
          </div>

          {shareCount > 0 && (
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Shared {shareCount} time{shareCount !== 1 ? 's' : ''} in this session
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialSharing; 