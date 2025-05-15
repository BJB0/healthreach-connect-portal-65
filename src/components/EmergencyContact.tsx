
import React from 'react';
import { Phone, Ambulance, Hospital } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EmergencyContact = () => {
  return (
    <Card className="border-emergency-100 shadow-md">
      <CardHeader className="bg-emergency-50 border-b border-emergency-100">
        <CardTitle className="flex items-center text-emergency-700">
          <Phone className="mr-2 h-5 w-5" />
          Emergency Support
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button 
              className="bg-emergency-600 hover:bg-emergency-700 text-white flex items-center justify-center h-12"
              onClick={() => window.location.href = 'tel:102'}
            >
              <Ambulance className="mr-2 h-5 w-5" />
              <span>Call Ambulance (102)</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-emergency-500 text-emergency-600 hover:bg-emergency-50 flex items-center justify-center h-12"
              onClick={() => window.location.href = 'tel:108'}
            >
              <Hospital className="mr-2 h-5 w-5" />
              <span>Medical Helpline (108)</span>
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
            <p>These are emergency services. For non-emergency medical advice, please book a consultation with a doctor.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContact;
