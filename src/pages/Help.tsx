
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Help = () => {
  const quickHelp = [
    {
      title: "Finding Hospitals",
      steps: [
        "Go to the 'Find Hospitals' page from the main menu",
        "Enter your location or allow location access",
        "Browse hospitals or use filters to narrow down results",
        "Click on a hospital card to view more details"
      ]
    },
    {
      title: "Booking Appointments",
      steps: [
        "Navigate to the 'Doctors' page",
        "Search for doctors by name, specialty, or hospital",
        "Select a doctor and click 'Book Appointment'",
        "Choose a date and time slot",
        "Confirm your booking details"
      ]
    },
    {
      title: "Checking Medicine Availability",
      steps: [
        "Go to the 'Medicines' page from the main menu",
        "Search for a medicine by name or generic name",
        "View availability at different healthcare centers",
        "Click 'Check Nearby' for specific locations"
      ]
    },
    {
      title: "Finding Government Schemes",
      steps: [
        "Visit the 'Gov. Schemes' page",
        "Browse schemes or filter by category",
        "Click on a scheme to view eligibility and benefits",
        "Follow the link to the official website for more details"
      ]
    }
  ];
  
  const contactInfo = [
    {
      title: "Customer Support",
      icon: <Phone className="h-5 w-5" />,
      content: "Call us at +91 1800-XXX-XXXX\nAvailable Mon-Fri, 9 AM - 6 PM"
    },
    {
      title: "Email Support",
      icon: <Mail className="h-5 w-5" />,
      content: "support@healthreach.org\nWe typically respond within 24 hours"
    },
    {
      title: "Live Chat",
      icon: <MessageCircle className="h-5 w-5" />,
      content: "Chat with our support team\nAvailable on weekdays, 10 AM - 5 PM"
    },
    {
      title: "Regional Office",
      icon: <MapPin className="h-5 w-5" />,
      content: "123 Health Avenue, Sector 4\nNew Delhi, 110001\nIndia"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-gray-600 max-w-2xl">
            Get assistance and learn how to use HealthReach effectively
          </p>
        </div>
      </section>
      
      <section className="py-8 bg-white flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <Tabs defaultValue="guides" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="guides">Quick Guides</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickHelp.map((guide, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <CardDescription>Step by step instructions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="list-decimal pl-5 space-y-2">
                        {guide.steps.map((step, i) => (
                          <li key={i} className="text-gray-600">{step}</li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                    <AccordionContent>
                      Click on "Login", then select "Forgot Password". Enter your registered email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I reschedule my appointment?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can reschedule an appointment up to 4 hours before the scheduled time. Go to "My Appointments", find the appointment you want to change, and click the "Reschedule" button.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, HealthReach complies with data protection regulations. Your personal and medical information is encrypted and only shared with healthcare providers you choose to connect with. For more details, please refer to our Privacy Policy.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="contact">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-600">
                          {item.icon}
                        </div>
                        <h3 className="font-medium">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <h2 className="text-xl font-semibold mb-3">Need More Help?</h2>
                <p className="text-gray-600 mb-4 max-w-md mx-auto">
                  Our support team is ready to assist you with any issues or questions you may have
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-medical-500 hover:bg-medical-600">
                    <Phone className="h-4 w-4 mr-2" /> Call Support
                  </Button>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" /> Email Support
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">User Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Comprehensive guide for using all features of HealthReach platform.
                    </p>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button variant="outline" className="w-full">Download PDF</Button>
                  </div>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Video Tutorials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Step-by-step video guides for navigating and using the platform.
                    </p>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button variant="outline" className="w-full">Watch Videos</Button>
                  </div>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Helpline Directory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      List of important healthcare helpline numbers across regions.
                    </p>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button variant="outline" className="w-full">View Directory</Button>
                  </div>
                </Card>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start h-auto py-3">
                    Health Guidelines &amp; Advisories
                  </Button>
                  <Button variant="outline" className="justify-start h-auto py-3">
                    Healthcare Rights &amp; Policies
                  </Button>
                  <Button variant="outline" className="justify-start h-auto py-3">
                    Medical Emergency Protocols
                  </Button>
                  <Button variant="outline" className="justify-start h-auto py-3">
                    Insurance Coverage Guide
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Help;
