
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color?: string;
}

const ServiceCard = ({ title, description, icon, link, color = "bg-medical-50" }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-gray-200">
      <div className={cn("p-4 flex items-center justify-center", color)}>
        <div className="h-12 w-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={link}>Explore</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
