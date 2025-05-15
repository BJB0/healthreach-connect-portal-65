
import React from 'react';
import { Separator } from "@/components/ui/separator";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-medical-50 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: May 15, 2025
          </p>
        </div>
      </section>
      
      <section className="py-8 bg-white flex-grow">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto prose prose-blue">
            <div className="mb-8">
              <p className="text-gray-600">
                At HealthReach, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
              <Separator className="my-4" />
              
              <h3 className="text-lg font-medium mb-2">Personal Information</h3>
              <p className="text-gray-600 mb-3">
                We may collect personal information that you voluntarily provide when using our service, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Full name and contact information (email address, phone number)</li>
                <li>Date of birth and gender</li>
                <li>Address and location data</li>
                <li>Medical history and health information</li>
                <li>Insurance information</li>
                <li>Emergency contact details</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-3">
                When you access our platform, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information (type, operating system, browser)</li>
                <li>IP address and usage data</li>
                <li>Location data (with your permission)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">How We Use Your Information</h2>
              <Separator className="my-4" />
              
              <p className="text-gray-600 mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing appointments and connecting you with healthcare providers</li>
                <li>Sending you appointment reminders and health information</li>
                <li>Personalizing your experience on our platform</li>
                <li>Analyzing usage patterns to enhance our services</li>
                <li>Complying with legal obligations</li>
                <li>Responding to your inquiries and support requests</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Sharing Your Information</h2>
              <Separator className="my-4" />
              
              <p className="text-gray-600 mb-3">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>With healthcare providers you choose to connect with</li>
                <li>With third-party service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>With your explicit consent</li>
              </ul>
              
              <p className="text-gray-600 mt-3">
                We do not sell your personal information to third parties.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Data Security</h2>
              <Separator className="my-4" />
              
              <p className="text-gray-600 mb-3">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Data encryption during transmission and storage</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security assessments and audits</li>
                <li>Staff training on data protection</li>
              </ul>
              
              <p className="text-gray-600 mt-3">
                However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Your Rights</h2>
              <Separator className="my-4" />
              
              <p className="text-gray-600 mb-3">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Right to access and receive a copy of your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <p className="text-gray-600 mt-3">
                To exercise these rights, please contact us at privacy@healthreach.org.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Changes to This Privacy Policy</h2>
              <Separator className="my-4" />
              
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <Separator className="my-4" />
              
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 text-gray-600">
                <p>Email: privacy@healthreach.org</p>
                <p>Phone: +91 1800-XXX-XXXX</p>
                <p>Address: 123 Health Avenue, Sector 4, New Delhi, 110001, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;
