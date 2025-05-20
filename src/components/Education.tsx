
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="section-padding">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border border-primary/20 overflow-hidden">
            <div className="bg-primary/10 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl mb-2">VIT University – Chennai, Tamil Nadu</CardTitle>
                <CardDescription className="text-foreground/70 text-lg">2020 – 2025</CardDescription>
              </CardHeader>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Integrated MTech (Dual Degree)</h3>
                <p className="text-foreground/80">
                  Computer Science Engineering, Specialization in Business Analytics
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">CGPA:</span> 7.98 / 10
                </div>
                <div className="bg-secondary dark:bg-secondary/20 px-4 py-1 rounded-full">
                  <span className="font-medium">Duration:</span> 5 Years
                </div>
              </div>
              
              <div className="space-y-3 mt-4 pt-4 border-t border-border">
                <h4 className="font-medium text-lg">Key Coursework</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Machine Learning & Applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Deep Learning Architectures</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Computer Vision</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Business Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Data Mining</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Distributed Computing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Database Systems</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <div className="inline-block p-4 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
              <p className="text-foreground/80">
                Beyond formal education, I'm constantly expanding my skills through online courses, 
                technical documentation, and hands-on projects to stay at the cutting edge of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
