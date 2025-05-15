
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Feedback = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !feedbackType || !message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your feedback.",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form (mock submission)
    toast({
      title: "Feedback submitted",
      description: "Thank you for your feedback! We'll review it shortly.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setFeedbackType("");
    setMessage("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Submit Feedback</h1>
          <p className="text-gray-600">
            We value your input and suggestions to improve our services
          </p>
        </div>
      </section>
      
      <section className="py-8 bg-white flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Form</CardTitle>
                <CardDescription>
                  Share your experience, report issues, or suggest improvements to help us serve you better.
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback-type">Feedback Type</Label>
                    <Select value={feedbackType} onValueChange={setFeedbackType}>
                      <SelectTrigger id="feedback-type">
                        <SelectValue placeholder="Select feedback type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Feedback</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="issue">Report an Issue</SelectItem>
                        <SelectItem value="experience">Share Experience</SelectItem>
                        <SelectItem value="question">Ask a Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your feedback..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button type="button" variant="outline">Cancel</Button>
                  <Button type="submit" className="bg-medical-500 hover:bg-medical-600">
                    Submit Feedback
                  </Button>
                </CardFooter>
              </form>
            </Card>
            
            <div className="mt-8 text-center">
              <h2 className="text-xl font-semibold mb-3">Other Ways to Reach Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">Phone Support</h3>
                    <p className="text-gray-600 text-sm">
                      Call us at<br />
                      <span className="text-medical-600 font-medium">+91 1800-XXX-XXXX</span>
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-gray-600 text-sm">
                      Write to us at<br />
                      <span className="text-medical-600 font-medium">support@healthreach.org</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Feedback;
