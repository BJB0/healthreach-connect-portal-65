
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for medicines
const medicines = [
  {
    id: "m1",
    name: "Paracetamol",
    generic: "Acetaminophen",
    category: "Pain Reliever",
    availability: "Available",
    locations: ["District General Hospital", "Community Health Center", "Rural Health Clinic"],
    price: "₹10-25 per strip"
  },
  {
    id: "m2",
    name: "Amoxicillin",
    generic: "Amoxicillin",
    category: "Antibiotic",
    availability: "Available",
    locations: ["District General Hospital", "Community Health Center"],
    price: "₹50-80 per strip"
  },
  {
    id: "m3",
    name: "Metformin",
    generic: "Metformin Hydrochloride",
    category: "Diabetes",
    availability: "Limited Stock",
    locations: ["District General Hospital"],
    price: "₹30-45 per strip"
  },
  {
    id: "m4",
    name: "Amlodipine",
    generic: "Amlodipine Besylate",
    category: "Blood Pressure",
    availability: "Available",
    locations: ["District General Hospital", "Community Health Center", "City Super Specialty Hospital"],
    price: "₹25-40 per strip"
  },
  {
    id: "m5",
    name: "Aspirin",
    generic: "Acetylsalicylic Acid",
    category: "Blood Thinner",
    availability: "Available",
    locations: ["District General Hospital", "Community Health Center", "Rural Health Clinic"],
    price: "₹15-30 per strip"
  }
];

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  
  // Filter medicines based on search and category
  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          medicine.generic.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = category === "" || medicine.category === category;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Check Medicine Availability</h1>
          <p className="text-gray-600 mb-6">
            Find essential medicines and check their availability at local healthcare centers
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name or generic name"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_categories">All Categories</SelectItem>
                <SelectItem value="Pain Reliever">Pain Relievers</SelectItem>
                <SelectItem value="Antibiotic">Antibiotics</SelectItem>
                <SelectItem value="Diabetes">Diabetes</SelectItem>
                <SelectItem value="Blood Pressure">Blood Pressure</SelectItem>
                <SelectItem value="Blood Thinner">Blood Thinners</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50 flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              {filteredMedicines.length} {filteredMedicines.length === 1 ? 'result' : 'results'} found
            </p>
            <Select defaultValue="name">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="availability">Availability</SelectItem>
                <SelectItem value="price_low">Price (Low to High)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {filteredMedicines.map((medicine) => (
              <Card key={medicine.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{medicine.name}</h3>
                        <Badge 
                          className={`${
                            medicine.availability === "Available" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {medicine.availability}
                        </Badge>
                      </div>
                      <p className="text-gray-500 text-sm">Generic: {medicine.generic}</p>
                      <p className="text-gray-600 mt-1">Category: {medicine.category}</p>
                      <p className="text-gray-600">Price Range: {medicine.price}</p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600 font-medium">Available at:</p>
                        <ul className="text-sm text-gray-600">
                          {medicine.locations.map((location, index) => (
                            <li key={index} className="inline-block mr-2">
                              <Badge variant="outline" className="mr-1 mt-1">
                                {location}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Button variant="outline">Check Nearby</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredMedicines.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No medicines found matching your criteria.</p>
                <Button variant="link" onClick={() => { setSearchQuery(""); setCategory(""); }}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Medicines;
