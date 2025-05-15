
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  address: string;
  availability: string;
  experience: string;
  rating: number;
  image?: string;
  isAvailableNow: boolean;
}

const DoctorCard = ({
  id,
  name,
  specialty,
  hospital,
  address,
  availability,
  experience,
  rating,
  image,
  isAvailableNow
}: DoctorCardProps) => {
  // Get initials for the avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16 border border-gray-200">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-medical-100 text-medical-600">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-1 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-600">{specialty}</p>
              </div>
              
              <Badge 
                variant={isAvailableNow ? "default" : "outline"}
                className={isAvailableNow 
                  ? "bg-green-500 text-white animate-pulse-subtle" 
                  : "border-gray-300 text-gray-500"}
              >
                {isAvailableNow ? "Available Now" : "Unavailable"}
              </Badge>
            </div>
            
            <div className="text-xs text-gray-500">
              {experience} • {rating} ★
            </div>
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-gray-500" />
            <p className="text-sm text-gray-600">{hospital}, {address}</p>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-500" />
            <p className="text-sm text-gray-600">{availability}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button asChild variant="outline" className="w-[48%]">
          <Link to={`/doctors/${id}`}>View Profile</Link>
        </Button>
        <Button 
          className="w-[48%]" 
          disabled={!isAvailableNow}
        >
          <Link to={isAvailableNow ? `/doctors/${id}/book` : "#"} className={isAvailableNow ? "text-white" : "cursor-not-allowed"}>
            Book Appointment
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
