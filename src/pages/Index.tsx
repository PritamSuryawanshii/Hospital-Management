
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlurCard from '@/components/ui/BlurCard';
import FadeIn from '@/components/animations/FadeIn';
import { Calendar, Clock, FileText, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-hospital-50 to-white -z-10" />
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-hospital-100 opacity-40 blur-3xl" />
            <div className="absolute top-10 -left-20 w-60 h-60 rounded-full bg-hospital-200 opacity-20 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <FadeIn className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hospital-900 leading-tight">
                  <span className="text-hospital-600">Seamless</span> Healthcare Management
                </h1>
                <p className="mt-6 text-lg text-hospital-700 max-w-xl mx-auto md:mx-0">
                  PatientConnect simplifies healthcare administration, giving you more time to focus on what matters most—your health.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link to="/signup">
                    <Button size="lg" className="bg-hospital-600 hover:bg-hospital-700 text-white px-6 rounded-full">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="rounded-full border-hospital-300 text-hospital-700 hover:bg-hospital-50 px-6">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              
              <FadeIn delay={200} direction="right" className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-full h-full bg-hospital-200 rounded-2xl transform -rotate-3 opacity-20" />
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Hospital Management System" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-hospital-900">
                  Designed for Better Patient Experience
                </h2>
                <p className="mt-4 text-lg text-hospital-600 max-w-3xl mx-auto">
                  Our hospital management system puts patients first with intuitive features that make healthcare management simple and efficient.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <BlurCard hoverEffect className="text-center p-8">
                  <div className="w-16 h-16 bg-hospital-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-hospital-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-hospital-900 mb-3">
                    Easy Appointment Scheduling
                  </h3>
                  <p className="text-hospital-600">
                    Book, reschedule, or cancel appointments with just a few clicks. Receive timely reminders to ensure you never miss an appointment.
                  </p>
                </BlurCard>
              </FadeIn>
              
              <FadeIn delay={200}>
                <BlurCard hoverEffect className="text-center p-8">
                  <div className="w-16 h-16 bg-hospital-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-hospital-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-hospital-900 mb-3">
                    Medical Records Access
                  </h3>
                  <p className="text-hospital-600">
                    Secure access to your complete medical history, lab results, and treatment plans. Share information with trusted healthcare providers.
                  </p>
                </BlurCard>
              </FadeIn>
              
              <FadeIn delay={300}>
                <BlurCard hoverEffect className="text-center p-8">
                  <div className="w-16 h-16 bg-hospital-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-hospital-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-hospital-900 mb-3">
                    Privacy & Security
                  </h3>
                  <p className="text-hospital-600">
                    Your health information is protected with industry-leading security measures. Control who has access to your sensitive data.
                  </p>
                </BlurCard>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-hospital-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <FadeIn className="w-full md:w-1/2 order-2 md:order-1">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle className="h-6 w-6 text-hospital-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-hospital-900 mb-2">
                        Reduce Waiting Times
                      </h3>
                      <p className="text-hospital-700">
                        Digital check-ins and streamlined processes mean less time in waiting rooms and more efficient care.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle className="h-6 w-6 text-hospital-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-hospital-900 mb-2">
                        Improved Communication
                      </h3>
                      <p className="text-hospital-700">
                        Direct messaging with healthcare providers ensures your questions are answered promptly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle className="h-6 w-6 text-hospital-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-hospital-900 mb-2">
                        Better Health Outcomes
                      </h3>
                      <p className="text-hospital-700">
                        Access to comprehensive health data helps you make informed decisions about your care plan.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={200} className="w-full md:w-1/2 order-1 md:order-2">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-hospital-900 mb-6">
                    Benefits for Patients
                  </h2>
                  <p className="text-lg text-hospital-700 mb-8">
                    Our system is designed with patients at the center, providing tools and resources that improve the overall healthcare experience.
                  </p>
                  <Link to="/signup">
                    <Button size="lg" className="bg-hospital-600 hover:bg-hospital-700 text-white rounded-full px-6">
                      Join PatientConnect
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <FadeIn>
              <BlurCard className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-hospital-900 mb-4">
                  Ready to Take Control of Your Healthcare?
                </h2>
                <p className="text-lg text-hospital-700 mb-8 max-w-2xl mx-auto">
                  Join thousands of patients who have simplified their healthcare journey with PatientConnect. 
                  Sign up today for free and experience healthcare management like never before.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button size="lg" className="bg-hospital-600 hover:bg-hospital-700 text-white px-8 rounded-full">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-hospital-300 text-hospital-700 hover:bg-hospital-50 px-8 rounded-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </BlurCard>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
