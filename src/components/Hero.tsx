
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const Typewriter = ({ texts, speed = 100, delay = 1500 }: TypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current text being displayed
      const fullText = texts[currentTextIndex];
      
      // If deleting text
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        // If typing text
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }
      
      // If finished typing the complete text
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } 
      // If finished deleting
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? speed / 2 : speed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delay]);
  
  return (
    <span className="typing-container animate-blink">
      {currentText}
    </span>
  );
};

export const Hero = () => {
  const titles = [
    "AI/ML Developer",
    "System Designer",
    "Full Stack Engineer",
    "Data Scientist"
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm md:text-base font-medium bg-primary/10 text-primary mb-2">
              👋 Hi, I'm Jeevesh Nandan Upadhyay
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Computer Science <span className="text-primary">&</span> Business Analytics Graduate
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground/70 font-medium">
              <Typewriter texts={titles} />
            </h2>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-foreground/80">
              I build emotion-aware systems, AI-powered recyclers, and real-time prediction engines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" className="px-8 py-6">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center">
        <span className="text-foreground/70 text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} className="text-primary" />
      </div>
    </section>
  );
};
