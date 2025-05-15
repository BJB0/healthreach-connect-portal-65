import React, { useState } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorCard from '@/components/DoctorCard';

// Mock data for doctors
const doctors = [
  {
    id: "d1",
    name: "Dr. Priya Sharma",
    specialty: "General Physician",
    hospital: "District General Hospital",
    address: "Civil Lines, Sector 4",
    availability: "Mon, Wed, Fri (10:00 AM - 2:00 PM)",
    experience: "12 years experience",
    rating: 4.8,
    isAvailableNow: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "d2",
    name: "Dr. Rajesh Kumar",
    specialty: "Pediatrician",
    hospital: "Community Health Center",
    address: "Main Road, Chandpur",
    availability: "Tue, Thu, Sat (9:00 AM - 1:00 PM)",
    experience: "8 years experience",
    rating: 4.5,
    isAvailableNow: false,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "d3",
    name: "Dr. Anjali Gupta",
    specialty: "Gynecologist",
    hospital: "Lifeline Medical Center",
    address: "MG Road, Near Bus Stand",
    availability: "Mon-Sat (4:00 PM - 8:00 PM)",
    experience: "15 years experience",
    rating: 4.9,
    isAvailableNow: true,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: "d4",
    name: "Dr. Sanjay Verma",
    specialty: "Orthopedic Surgeon",
    hospital: "City Super Specialty Hospital",
    address: "Civil Line Road",
    availability: "Mon, Wed, Fri (11:00 AM - 3:00 PM)",
    experience: "20 years experience",
    rating: 4.7,
    isAvailableNow: false,
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: "d5",
    name: "Dr. Meera Patel",
    specialty: "Dermatologist",
    hospital: "Rural Health Clinic",
    address: "Gram Panchayat Road",
    availability: "Tue, Thu (10:00 AM - 2:00 PM)",
    experience: "6 years experience",
    rating: 4.4,
    isAvailableNow: true,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  
  // Filter doctors based on search and filters
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = specialty === "" || doctor.specialty === specialty;
    
    const matchesAvailability = 
      availabilityFilter === "" || 
      (availabilityFilter === "available" && doctor.isAvailableNow);
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Find Doctors</h1>
          <p className="text-gray-600 mb-6">
            Book appointments with specialists and physicians in your area
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, specialty or hospital"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={specialty} onValueChange={setSpecialty}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_specialties">All Specialties</SelectItem>
                <SelectItem value="General Physician">General Physician</SelectItem>
                <SelectItem value="Pediatrician">Pediatrician</SelectItem>
                <SelectItem value="Gynecologist">Gynecologist</SelectItem>
                <SelectItem value="Orthopedic Surgeon">Orthopedic Surgeon</SelectItem>
                <SelectItem value="Dermatologist">Dermatologist</SelectItem>
              </SelectContent>
            </Select>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Select Date</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select Appointment Date</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <div className="grid grid-cols-7 gap-2 text-center mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-xs font-medium text-gray-600">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 14 }).map((_, index) => {
                      const today = new Date();
                      const date = new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate() + index
                      );
                      
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className={`h-12 ${index === 0 ? 'border-medical-300' : ''}`}
                        >
                          <span className="text-xs">{date.getDate()}</span>
                        </Button>
                      );
                    })}
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <Button variant="outline">Reset</Button>
                    <Button>Apply</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              variant={availabilityFilter === "available" ? "default" : "outline"}
              className={availabilityFilter === "available" ? "bg-medical-500 hover:bg-medical-600" : ""}
              onClick={() => {
                setAvailabilityFilter(
                  availabilityFilter === "available" ? "" : "available"
                );
              }}
            >
              Available Now
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50 flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
              <TabsTrigger value="all">All Doctors</TabsTrigger>
              <TabsTrigger value="tele">Teleconsultation</TabsTrigger>
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} found
                </p>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                    <SelectItem value="experience">Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    id={doctor.id}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    hospital={doctor.hospital}
                    address={doctor.address}
                    availability={doctor.availability}
                    experience={doctor.experience}
                    rating={doctor.rating}
                    image={doctor.image}
                    isAvailableNow={doctor.isAvailableNow}
                  />
                ))}
                
                {filteredDoctors.length === 0 && (
                  <div className="text-center py-12 col-span-2">
                    <p className="text-gray-500">No doctors found matching your criteria.</p>
                    <Button 
                      variant="link" 
                      onClick={() => { 
                        setSearchQuery(""); 
                        setSpecialty(""); 
                        setAvailabilityFilter("");
                      }}
                    >
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="tele" className="mt-6">
              <div className="text-center py-12">
                <p className="text-gray-500">Teleconsultation service coming soon.</p>
                <p className="text-sm text-gray-400 mt-2">
                  You'll be able to consult with doctors remotely via video calls.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="appointments" className="mt-6">
              <div className="text-center py-12">
                <p className="text-gray-500">You don't have any appointments yet.</p>
                <Button variant="link" className="text-medical-500">
                  Find and book an appointment
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Doctors;
