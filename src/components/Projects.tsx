
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

interface Project {
  title: string;
  type: string;
  github?: string;
  tech: string[];
  description: string[];
  image?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "EmotiGen",
      type: "AI-powered Voice-to-Text Document Generator with Emotion Detection",
      github: "https://github.com/jeevesh101",
      tech: ["Python", "FastAPI", "PostgreSQL", "Whisper", "VADER", "HuggingFace", "AWS"],
      description: [
        "Converts speech to structured text (emails, notes, letters).",
        "Uses Whisper for transcription and VADER for emotion classification.",
        "Supports emotional context-aware formatting and document delivery.",
        "Achieved 95% accuracy in emotion recognition.",
        "Modules include formal letter generation, classroom note assistant, and more."
      ]
    },
    {
      title: "EcoNet",
      type: "AI-Integrated Recycling & Thrift System (Patent Filed)",
      github: "https://github.com/jeevesh101",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "AWS Lambda", "S3", "GitLab CI/CD"],
      description: [
        "Platform that connects households, ragpickers, and recyclers for optimized waste pickup.",
        "Built-in fraud detection using AI: matches predicted waste type & weight against user inputs.",
        "Integrates thrift store and recycled store with verified listings.",
        "Implemented shortest path routing (Dijkstra) and serverless architecture using AWS."
      ]
    },
    {
      title: "ATRIA-CT",
      type: "Abdominal Trauma Detection from CT Scans (Medical Imaging AI)",
      tech: ["Python", "U-Net", "EfficientNetB0", "OpenCV", "PyTorch"],
      description: [
        "Developed for RSNA 2023 challenge – processed 1.5M+ CT images.",
        "Used U-Net for segmentation and EfficientNet for trauma classification (94% accuracy).",
        "Handled DICOM preprocessing, artifact removal, and GPU-accelerated parallel pipelines."
      ]
    },
    {
      title: "FinVision",
      type: "Financial Analytics and Predictive Modeling Suite",
      tech: ["R (QUANTMOD)", "Python", "Tableau", "Seaborn", "ARIMA", "KNN", "Neural Networks"],
      description: [
        "Built financial insight engine to analyze stock trends (Goldman Sachs case study 2016–2024).",
        "Detects manipulation using Benford's Law.",
        "Forecasts price using ARIMA, neural networks with over 93% prediction accuracy.",
        "Integrated data scraping, forecasting, and visualization."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-padding">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary/30 transition-all duration-300">
              <CardHeader className="bg-secondary/50 dark:bg-secondary/20">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70 mt-1">
                  {project.type}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <ul className="space-y-2 text-foreground/80">
                  {project.description.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center pt-4 space-x-3">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" className="flex items-center space-x-2">
                      <Link className="w-4 h-4" />
                      <span>Details</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
