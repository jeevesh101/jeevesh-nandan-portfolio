
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="section-padding">
        <h2 className="section-title">A Data-Driven Creator with a Purpose</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-lg">
                I'm a passionate Computer Science & Business Analytics graduate from VIT Chennai, 
                obsessed with solving real-world problems using AI, machine learning, and scalable software systems. 
                I've built end-to-end platforms like EmotiGen (emotion-aware voice-to-text assistant) and 
                EcoNet (an AI-powered recycling system) which are being recognized at institutional and national levels.
              </p>
              
              <p className="text-lg">
                With hands-on experience in NLP, Computer Vision, predictive modeling, and cloud-native development, 
                I aim to design ethical and impactful systems that are smart, human-aware, and sustainable.
              </p>
              
              <p className="text-lg">
                Whether it's enabling students with better lecture note generation or helping recyclers get fair pricing, 
                I'm constantly working to merge tech with empathy.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 border border-border bg-card">
                <h3 className="font-heading text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-foreground/70">
                  Developing intelligent systems that learn, adapt, and enhance human experiences through algorithmic innovation.
                </p>
              </Card>
              
              <Card className="p-5 border border-border bg-card">
                <h3 className="font-heading text-xl font-semibold mb-2">Full Stack Development</h3>
                <p className="text-foreground/70">
                  Building end-to-end applications with scalable architecture and intuitive interfaces for real-world impact.
                </p>
              </Card>
              
              <Card className="p-5 border border-border bg-card">
                <h3 className="font-heading text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-foreground/70">
                  Transforming raw data into meaningful insights through statistical analysis and visualization techniques.
                </p>
              </Card>
              
              <Card className="p-5 border border-border bg-card">
                <h3 className="font-heading text-xl font-semibold mb-2">System Architecture</h3>
                <p className="text-foreground/70">
                  Designing robust, scalable systems that efficiently solve complex problems with elegant solutions.
                </p>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-1 flex flex-col justify-center">
            <Card className="p-6 border border-primary/20 bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full -ml-20 -mb-20"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Quick Facts</h3>
              
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">📍</span>
                  <div>
                    <span className="font-medium">Location:</span> Sultanpur, India
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">🎓</span>
                  <div>
                    <span className="font-medium">Degree:</span> Integrated MTech in CSE with Business Analytics
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">💻</span>
                  <div>
                    <span className="font-medium">Favorite Stack:</span> Python, React, AWS
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">🔍</span>
                  <div>
                    <span className="font-medium">Focus Areas:</span> AI/ML, NLP, Computer Vision
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">🚀</span>
                  <div>
                    <span className="font-medium">Goal:</span> Creating tech that makes a positive impact
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
