
import React, { useState } from 'react';
import { Calendar, Clock, User, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for upcoming appointments
const upcomingAppointments = [
  {
    id: "app1",
    doctorName: "Dr. Priya Sharma",
    doctorSpecialty: "General Physician",
    date: "2025-05-20",
    time: "10:30 AM",
    hospital: "District General Hospital",
    status: "confirmed",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "app2",
    doctorName: "Dr. Anjali Gupta",
    doctorSpecialty: "Gynecologist",
    date: "2025-05-25",
    time: "04:15 PM",
    hospital: "Lifeline Medical Center",
    status: "confirmed",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

// Mock data for past appointments
const pastAppointments = [
  {
    id: "past1",
    doctorName: "Dr. Rajesh Kumar",
    doctorSpecialty: "Pediatrician",
    date: "2025-05-05",
    time: "11:00 AM",
    hospital: "Community Health Center",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "past2",
    doctorName: "Dr. Sanjay Verma",
    doctorSpecialty: "Orthopedic Surgeon",
    date: "2025-04-22",
    time: "02:30 PM",
    hospital: "City Super Specialty Hospital",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: "past3",
    doctorName: "Dr. Meera Patel",
    doctorSpecialty: "Dermatologist",
    date: "2025-04-10",
    time: "10:45 AM",
    hospital: "Rural Health Clinic",
    status: "cancelled",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Appointments = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">My Appointments</h1>
          <p className="text-gray-600 mb-6">
            Manage your appointments and get reminders for upcoming visits
          </p>
        </div>
      </section>
      
      <section className="py-8 bg-white flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <Tabs defaultValue="upcoming" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="book">Book New</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-6">
              {upcomingAppointments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            {appointment.status === "confirmed" ? "Confirmed" : appointment.status}
                          </Badge>
                          <Button variant="ghost" size="sm" className="text-gray-500">
                            Reschedule
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={appointment.image} alt={appointment.doctorName} />
                            <AvatarFallback>
                              {appointment.doctorName.split(" ").map(name => name[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h3 className="font-semibold">{appointment.doctorName}</h3>
                            <p className="text-sm text-gray-500">{appointment.doctorSpecialty}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{new Date(appointment.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <User className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{appointment.hospital}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-4">
                        <Button variant="outline" size="sm">Cancel</Button>
                        <Button size="sm" className="bg-medical-500 hover:bg-medical-600">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Appointments</h3>
                  <p className="text-gray-500 mb-4">You don't have any upcoming appointments scheduled.</p>
                  <Button className="bg-medical-500 hover:bg-medical-600">Book an Appointment</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="mt-6">
              {pastAppointments.length > 0 ? (
                <div className="space-y-4">
                  {pastAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={appointment.image} alt={appointment.doctorName} />
                              <AvatarFallback>
                                {appointment.doctorName.split(" ").map(name => name[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{appointment.doctorName}</h3>
                              <p className="text-xs text-gray-500">{appointment.doctorSpecialty}</p>
                            </div>
                          </div>
                          
                          <Badge className={`${
                            appointment.status === "completed" 
                              ? "bg-gray-100 text-gray-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {appointment.status === "completed" ? "Completed" : "Cancelled"}
                          </Badge>
                        </div>
                        
                        <div className="mt-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1 text-gray-500" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                            <span className="mx-1">•</span>
                            <Clock className="h-3 w-3 mr-1 text-gray-500" />
                            <span>{appointment.time}</span>
                            <span className="mx-1">•</span>
                            <User className="h-3 w-3 mr-1 text-gray-500" />
                            <span>{appointment.hospital}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex justify-end space-x-2">
                          {appointment.status === "completed" && (
                            <>
                              <Button variant="outline" size="sm">View Prescription</Button>
                              <Button variant="outline" size="sm" className="text-medical-600">
                                Book Follow-up
                              </Button>
                            </>
                          )}
                          {appointment.status === "cancelled" && (
                            <Button variant="outline" size="sm" className="text-medical-600">
                              Rebook
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">You don't have any past appointments.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="book" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-4">Select Date & Time</h3>
                  <div className="mb-5">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="text-sm font-medium mb-2">Available Time Slots</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                        <Button key={time} variant="outline" size="sm" className="justify-center">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-medical-500 hover:bg-medical-600">
                    Confirm Appointment
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Select a Doctor</h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Dr. Priya Sharma",
                        specialty: "General Physician",
                        image: "https://randomuser.me/api/portraits/women/44.jpg"
                      },
                      {
                        name: "Dr. Rajesh Kumar",
                        specialty: "Pediatrician",
                        image: "https://randomuser.me/api/portraits/men/32.jpg"
                      },
                      {
                        name: "Dr. Anjali Gupta",
                        specialty: "Gynecologist",
                        image: "https://randomuser.me/api/portraits/women/68.jpg"
                      }
                    ].map((doctor, index) => (
                      <div 
                        key={index} 
                        className="p-3 border rounded-md flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                      >
                        <Avatar>
                          <AvatarImage src={doctor.image} alt={doctor.name} />
                          <AvatarFallback>{doctor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{doctor.name}</p>
                          <p className="text-sm text-gray-500">{doctor.specialty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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

export default Appointments;
