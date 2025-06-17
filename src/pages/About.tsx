
import Layout from '@/components/Layout';
import { Zap, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About</span> VoidGrid
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building the future of web hosting, one deployment at a time.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20 animate-slide-in">
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At VoidGrid, we believe that deploying and managing web applications should be as simple as 
                writing code. Our mission is to eliminate the complexity of traditional hosting and provide 
                developers with a platform that's both powerful and intuitive. We're not just another hosting 
                provider – we're your development partner.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-20 animate-slide-in">
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where the barrier between idea and implementation is virtually non-existent. 
                Where developers can focus on creating amazing experiences without worrying about infrastructure, 
                scaling, or deployment complexities. VoidGrid is the bridge to that future.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-20 animate-slide-in">
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  VoidGrid was born from frustration. As developers, we were tired of spending more time 
                  configuring servers than building features. We were exhausted by the endless cycle of 
                  infrastructure management that pulled us away from what we love most – creating.
                </p>
                <p>
                  So we decided to build something different. Something that would handle the complexity 
                  behind the scenes while providing developers with the tools they need to ship faster 
                  and more confidently.
                </p>
                <p>
                  Today, VoidGrid is more than just a hosting platform – it's a philosophy that development 
                  should be joyful, deployment should be effortless, and scaling should be automatic.
                </p>
              </div>
            </div>
          </div>

          {/* Founder's Note */}
          <div className="animate-slide-in">
            <div className="glass-card p-8 md:p-12 border-l-4 border-primary">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-white">Founder's Note</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "Building VoidGrid has been a journey of turning our daily frustrations into solutions. 
                  We're not just building a product – we're crafting an experience that we wish we had 
                  as developers."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">VG</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">VoidGrid Team</p>
                    <p className="text-muted-foreground text-sm">Founders & Developers</p>
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

export default About;
