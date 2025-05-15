
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for government schemes
const schemes = [
  {
    id: "s1",
    name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)",
    description: "Health insurance scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
    eligibility: "Poor and vulnerable families as identified by SECC data.",
    benefits: ["Cashless and paperless treatment at empanelled hospitals", "Coverage for pre and post hospitalization expenses", "No restrictions on family size or age"],
    category: "health_insurance",
    link: "https://pmjay.gov.in"
  },
  {
    id: "s2",
    name: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
    description: "Provides pregnant women free antenatal care on the 9th of every month to ensure healthy pregnancy.",
    eligibility: "All pregnant women in their 2nd/3rd trimester",
    benefits: ["Free comprehensive check-ups", "Treatment by specialists", "Free ultrasound and blood tests"],
    category: "maternal_health",
    link: "https://pmsma.mohfw.gov.in"
  },
  {
    id: "s3",
    name: "Rashtriya Swasthya Bima Yojana (RSBY)",
    description: "Health insurance scheme providing coverage up to ₹30,000 for BPL families.",
    eligibility: "Below Poverty Line (BPL) families",
    benefits: ["Cashless treatment in empanelled hospitals", "Coverage for most diseases", "Transportation allowance"],
    category: "health_insurance",
    link: "https://www.rsby.gov.in"
  },
  {
    id: "s4",
    name: "Janani Suraksha Yojana (JSY)",
    description: "Safe motherhood intervention to reduce maternal and neonatal mortality by promoting institutional delivery.",
    eligibility: "Pregnant women, especially from rural areas",
    benefits: ["Cash assistance for institutional delivery", "Accredited Social Health Activist (ASHA) support", "Post-delivery care"],
    category: "maternal_health",
    link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309"
  },
  {
    id: "s5",
    name: "Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)",
    description: "Aims to correct regional imbalances in the availability of affordable/reliable tertiary healthcare services.",
    eligibility: "All citizens in underserved areas",
    benefits: ["Improved access to quality medical education", "Affordable tertiary care", "State-of-the-art healthcare facilities"],
    category: "healthcare_infrastructure",
    link: "https://pmssy.mohfw.gov.in"
  }
];

const Schemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter schemes based on search and active tab
  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeTab === "all" || scheme.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Government Healthcare Schemes</h1>
          <p className="text-gray-600 mb-6">
            Learn about government healthcare schemes, benefits, and eligibility criteria
          </p>
          
          <div className="relative max-w-md mx-auto md:mx-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search schemes by name or description"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50 flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="all">All Schemes</TabsTrigger>
              <TabsTrigger value="health_insurance">Health Insurance</TabsTrigger>
              <TabsTrigger value="maternal_health">Maternal Health</TabsTrigger>
              <TabsTrigger value="healthcare_infrastructure">Healthcare Infrastructure</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredSchemes.length} {filteredSchemes.length === 1 ? 'scheme' : 'schemes'} found
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="overflow-hidden">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{scheme.name}</h3>
                  <Badge className="mb-3 bg-medical-100 text-medical-800 hover:bg-medical-200">
                    {scheme.category === "health_insurance" && "Health Insurance"}
                    {scheme.category === "maternal_health" && "Maternal Health"}
                    {scheme.category === "healthcare_infrastructure" && "Healthcare Infrastructure"}
                  </Badge>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">Eligibility:</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">Benefits:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {scheme.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                  <Button asChild variant="link" className="text-medical-600 p-0">
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                      Visit Official Website
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {filteredSchemes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No schemes found matching your criteria.</p>
                <Button variant="link" onClick={() => { setSearchQuery(""); setActiveTab("all"); }}>
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

export default Schemes;
