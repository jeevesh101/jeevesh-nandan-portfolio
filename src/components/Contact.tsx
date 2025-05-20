import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    console.log("Form submitted:", formState);
    // For now, just reset the form
    setFormState({ name: "", email: "", message: "" });
    alert("Thank you for your message! This is a demo form - in a real implementation, your message would be sent to Jeevesh.");
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-padding">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Have a question or want to work together? Send me a message!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-between">
            <Card className="border border-border mb-4">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:jeeveshnandan.upadhyay@gmail.com" className="hover:text-primary transition-colors">
                    jeeveshnandan.upadhyay@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919120616651" className="hover:text-primary transition-colors">
                    +91 9120616651
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Sultanpur, India</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/jeevesh101" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-secondary/50 dark:bg-secondary/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-6 h-6 mr-2" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jeevesh-nandan-upadhyay-0873b3204" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-secondary/50 dark:bg-secondary/20 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 mr-2" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
