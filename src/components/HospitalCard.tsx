
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HospitalCardProps {
  id: string;
  name: string;
  address: string;
  distance: string;
  phone: string;
  hours: string;
  type: string; // 'government' | 'private' | 'clinic'
  departments: string[];
}

const HospitalCard = ({ 
  id, 
  name, 
  address, 
  distance,
  phone, 
  hours, 
  type, 
  departments 
}: HospitalCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-gray-200">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <Badge 
            variant={type === 'government' ? 'default' : 'outline'}
            className={type === 'government' ? 'bg-medical-500' : 'border-medical-300 text-medical-700'}
          >
            {type === 'government' ? 'Govt Hospital' : type === 'private' ? 'Private Hospital' : 'Clinic'}
          </Badge>
        </div>
        
        <div className="space-y-2 mt-2">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">{address}</p>
              <p className="text-xs text-gray-500">{distance}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-gray-500" />
            <p className="text-sm text-gray-600">{phone}</p>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <p className="text-sm text-gray-600">{hours}</p>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-xs text-gray-500 mb-1">Available departments:</p>
          <div className="flex flex-wrap gap-1">
            {departments.slice(0, 3).map((dept, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {dept}
              </Badge>
            ))}
            {departments.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{departments.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button asChild variant="outline" className="w-[48%]">
          <Link to={`/hospitals/${id}`}>Details</Link>
        </Button>
        <Button className="w-[48%] bg-medical-500 hover:bg-medical-600">
          <Link to={`/hospitals/${id}/directions`} className="text-white">Get Directions</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HospitalCard;
