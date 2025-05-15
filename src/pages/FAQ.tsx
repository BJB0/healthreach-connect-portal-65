
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I find the nearest hospital in an emergency?",
      answer: "You can use our Hospital Locator feature on the homepage or directly navigate to the 'Find Hospitals' page. The system will automatically detect your location (with your permission) and show you the nearest healthcare facilities. In case of emergency, you can also use the Emergency Services section that provides direct contact numbers."
    },
    {
      question: "How can I book an appointment with a doctor?",
      answer: "To book an appointment, navigate to the 'Doctors' page, search for a doctor based on specialty, location, or name. Select the doctor you wish to consult, choose an available time slot, and confirm your appointment. You'll receive a confirmation message and a reminder before your appointment."
    },
    {
      question: "Are there any fees for using the HealthReach platform?",
      answer: "No, HealthReach is completely free to use. Our mission is to bridge the healthcare accessibility gap for rural and semi-urban residents. However, the actual medical services, consultations, and treatments will be charged as per the respective healthcare provider's policies."
    },
    {
      question: "How do I check if a specific medicine is available near me?",
      answer: "Visit the 'Medicines' page and search for the medicine by name or generic name. The system will show you the availability status at various local healthcare centers and pharmacies. You can also filter by distance to find the closest location where the medicine is available."
    },
    {
      question: "What government healthcare schemes am I eligible for?",
      answer: "Visit the 'Government Schemes' page to browse through various healthcare schemes. Each scheme listing includes eligibility criteria that you can check. For more personalized recommendations, you can create an account and fill in your profile details, and our system will suggest schemes you might be eligible for."
    },
    {
      question: "How do I get access to my medical records through HealthReach?",
      answer: "Currently, HealthReach is working on integrating electronic medical records. In the future, you'll be able to access your medical history through your profile. For now, you can request physical copies of your records from the respective healthcare facilities you've visited."
    },
    {
      question: "Is my health information secure on HealthReach?",
      answer: "Yes, we take data privacy and security very seriously. HealthReach follows industry-standard security protocols and complies with healthcare data protection regulations. Your personal and health information is encrypted and only shared with the healthcare providers you choose to connect with."
    },
    {
      question: "What should I do if I need an ambulance?",
      answer: "In case of an emergency requiring an ambulance, you can use our Emergency Services page which has a direct 'Request Ambulance' button. Alternatively, you can dial 102 or 108 (national emergency ambulance services) directly. These numbers are also listed on our Emergency page."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl">
            Find answers to common questions about HealthReach services, appointments, and more
          </p>
        </div>
      </section>
      
      <section className="py-8 bg-white flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
              <p className="text-gray-600 mb-4">
                If you couldn't find the answer to your question, please feel free to contact us
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/feedback" className="text-medical-600 hover:underline">
                  Submit a Question
                </a>
                <span className="hidden sm:inline text-gray-400">|</span>
                <a href="/help" className="text-medical-600 hover:underline">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
