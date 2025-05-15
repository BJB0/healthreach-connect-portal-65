
import React from 'react';
import { MapPin, User, Calendar, Medicine, Ambulance, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import EmergencyContact from '@/components/EmergencyContact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-50 to-blue-50 py-12 md:py-20">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Healthcare Access <span className="text-medical-600">Made Simple</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-600 mb-8">
              Connecting rural and semi-urban residents to essential healthcare services,
              doctors, and medical information all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-medical-500 hover:bg-medical-600">
                <Link to="/hospitals">Find Hospitals</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/doctors">Find Doctors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact Section */}
      <section className="py-8 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <EmergencyContact />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Hospital Locator"
              description="Find hospitals and clinics near you with directions, services, and contact information."
              icon={<MapPin className="h-8 w-8 text-medical-500" />}
              link="/hospitals"
              color="bg-medical-50"
            />
            
            <ServiceCard
              title="Doctor Appointments"
              description="Book appointments with specialists and general physicians in your area."
              icon={<User className="h-8 w-8 text-medical-500" />}
              link="/doctors"
              color="bg-medical-50"
            />
            
            <ServiceCard
              title="Medicine Checker"
              description="Check availability of essential medicines at local healthcare centers."
              icon={<Medicine className="h-8 w-8 text-medical-500" />}
              link="/medicines"
              color="bg-medical-50"
            />
            
            <ServiceCard
              title="Emergency Services"
              description="Quick access to ambulance services and emergency medical care."
              icon={<Ambulance className="h-8 w-8 text-emergency-600" />}
              link="/emergency"
              color="bg-emergency-50"
            />
            
            <ServiceCard
              title="Government Schemes"
              description="Information about healthcare schemes, benefits, and eligibility criteria."
              icon={<BookOpen className="h-8 w-8 text-medical-500" />}
              link="/schemes"
              color="bg-medical-50"
            />
            
            <ServiceCard
              title="Appointment Reminders"
              description="Get reminders and manage your upcoming medical appointments."
              icon={<Calendar className="h-8 w-8 text-medical-500" />}
              link="/appointments"
              color="bg-medical-50"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-medical-600 text-white">
        <div className="container px-4 mx-auto md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="max-w-2xl mx-auto text-medical-50 mb-8">
            Don't wait until it's too late. Find nearby healthcare facilities or book an appointment with a doctor today.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-medical-600 hover:bg-gray-100">
            <Link to="/hospitals">Find Healthcare Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
