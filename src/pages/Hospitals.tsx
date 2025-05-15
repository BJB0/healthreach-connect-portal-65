
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HospitalCard from '@/components/HospitalCard';

// Mock data for hospitals
const hospitals = [
  {
    id: "h1",
    name: "District General Hospital",
    address: "Civil Lines, Sector 4, Gandhi Nagar",
    distance: "2.5 km away",
    phone: "+91 1234567890",
    hours: "Open 24 hours",
    type: "government",
    departments: ["Emergency", "General Medicine", "Pediatrics", "Orthopedics", "Gynecology"]
  },
  {
    id: "h2",
    name: "Community Health Center",
    address: "Main Road, Village Chandpur",
    distance: "4.8 km away",
    phone: "+91 9876543210",
    hours: "Open 8:00 AM - 8:00 PM",
    type: "government",
    departments: ["General Medicine", "Pediatrics", "Basic Emergency"]
  },
  {
    id: "h3",
    name: "Lifeline Medical Center",
    address: "MG Road, Near Bus Stand",
    distance: "3.2 km away",
    phone: "+91 8765432109",
    hours: "Open 9:00 AM - 9:00 PM",
    type: "private",
    departments: ["General Medicine", "Cardiology", "Neurology", "Dermatology"]
  },
  {
    id: "h4",
    name: "Rural Health Clinic",
    address: "Gram Panchayat Road, Silvassa",
    distance: "6.1 km away",
    phone: "+91 7654321098",
    hours: "Open 9:00 AM - 5:00 PM",
    type: "clinic",
    departments: ["General Medicine", "Basic Emergency"]
  },
  {
    id: "h5",
    name: "City Super Specialty Hospital",
    address: "Civil Line Road, Near Railway Station",
    distance: "5.5 km away",
    phone: "+91 6543210987",
    hours: "Open 24 hours",
    type: "private",
    departments: ["Cardiology", "Neurology", "Oncology", "Nephrology", "Urology", "Emergency"]
  }
];

const Hospitals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hospitalType, setHospitalType] = useState("");
  
  // Filter hospitals based on search and filter
  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         hospital.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = hospitalType === "" || hospital.type === hospitalType;
    
    return matchesSearch && matchesType;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Find Hospitals</h1>
          <p className="text-gray-600 mb-6">
            Locate nearby hospitals, clinics, and healthcare centers in your area
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name or location"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={hospitalType} onValueChange={setHospitalType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Hospital Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_types">All Types</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="clinic">Clinic</SelectItem>
              </SelectContent>
            </Select>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>More Filters</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Filter Hospitals</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Distance</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Any distance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">Within 5 km</SelectItem>
                          <SelectItem value="10">Within 10 km</SelectItem>
                          <SelectItem value="20">Within 20 km</SelectItem>
                          <SelectItem value="50">Within 50 km</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Department</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Any department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Open Now</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Any time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="now">Open Now</SelectItem>
                          <SelectItem value="24">Open 24 hours</SelectItem>
                          <SelectItem value="any_time">Any</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <Button variant="outline">Reset</Button>
                    <Button>Apply Filters</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button className="flex items-center gap-2 bg-medical-500 hover:bg-medical-600">
              <MapPin className="h-4 w-4" />
              <span>View Map</span>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50 flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              {filteredHospitals.length} {filteredHospitals.length === 1 ? 'result' : 'results'} found
            </p>
            <Select defaultValue="distance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="type">Type</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                id={hospital.id}
                name={hospital.name}
                address={hospital.address}
                distance={hospital.distance}
                phone={hospital.phone}
                hours={hospital.hours}
                type={hospital.type}
                departments={hospital.departments}
              />
            ))}
          </div>
          
          {filteredHospitals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No hospitals found matching your criteria.</p>
              <Button variant="link" onClick={() => { setSearchQuery(""); setHospitalType(""); }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Hospitals;
