
import React from 'react';
import { Phone, Ambulance, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmergencyContact from '@/components/EmergencyContact';

const Emergency = () => {
  const emergencyNumbers = [
    { service: "Ambulance", number: "102 / 108", description: "National Emergency Ambulance Service" },
    { service: "Hospital Emergency", number: "1066", description: "Hospital Emergency Response" },
    { service: "Medical Helpline", number: "104", description: "Health Information and Advice" },
    { service: "Women's Helpline", number: "181", description: "24x7 Women Helpline" },
    { service: "Police", number: "100", description: "Police Emergency Service" },
    { service: "Fire", number: "101", description: "Fire Emergency Service" },
    { service: "Disaster Management", number: "1078", description: "For Natural Disasters" }
  ];

  const nearbyEmergencyCenters = [
    {
      name: "District General Hospital",
      distance: "2.5 km",
      address: "Civil Lines, Sector 4, Gandhi Nagar",
      phone: "+91 1234567890",
      services: ["24/7 Emergency", "Trauma Care", "Critical Care Unit"]
    },
    {
      name: "City Emergency Care Center",
      distance: "3.8 km",
      address: "MG Road, Near Bus Stand",
      phone: "+91 9876543210",
      services: ["24/7 Emergency", "Ambulance Service", "Accident & Trauma"]
    },
    {
      name: "Rural Emergency Center",
      distance: "6.2 km",
      address: "Gram Panchayat Road, Silvassa",
      phone: "+91 8765432109",
      services: ["Basic Emergency Care", "First Aid", "Patient Transport"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-emergency-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2 text-emergency-700">Emergency Services</h1>
          <p className="text-gray-600 mb-6">
            Quick access to emergency medical services and helpline numbers
          </p>

          <div className="bg-white border border-emergency-100 rounded-lg p-6 shadow-sm">
            <EmergencyContact className="mb-0" />
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="text-2xl font-bold mb-6">Emergency Helpline Numbers</h2>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Service</TableHead>
                  <TableHead className="w-[150px]">Number</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emergencyNumbers.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell className="font-bold text-emergency-600">{item.number}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" /> Call
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="text-2xl font-bold mb-6">Nearby Emergency Centers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyEmergencyCenters.map((center, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{center.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{center.distance} away</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>Address:</strong> {center.address}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Phone:</strong> {center.phone}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-1">Services:</p>
                    <ul className="text-xs text-gray-600">
                      {center.services.map((service, idx) => (
                        <li key={idx} className="mb-1">• {service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-emergency-600 hover:bg-emergency-700">
                      <Phone className="h-4 w-4 mr-1" /> Call
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MapPin className="h-4 w-4 mr-1" /> Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-emergency-600 text-white">
        <div className="container px-4 mx-auto md:px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Ambulance className="h-8 w-8 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold">Need an Ambulance?</h2>
          </div>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            In case of medical emergency, you can quickly request an ambulance service
            to your location with just one tap.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-emergency-600 hover:bg-gray-100">
            <Phone className="h-4 w-4 mr-2" /> Request Ambulance
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Emergency;
