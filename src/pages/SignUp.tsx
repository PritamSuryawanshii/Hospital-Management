
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { CheckCircle } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSuccessfulSignup = () => {
    // In a real application, this would create a user and set auth
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  const benefits = [
    'Access to your complete medical history',
    'Easy appointment scheduling',
    'Secure messaging with healthcare providers',
    'Digital prescription management',
    'Personalized health insights',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-hospital-50 to-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn delay={100} className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-hospital-900 mb-4">
                Join PatientConnect
              </h1>
              <p className="text-lg text-hospital-700 max-w-md mb-6">
                Create your account to start managing your healthcare more efficiently. It's free and only takes a minute.
              </p>
              
              <div className="hidden md:block">
                <h3 className="text-xl font-medium text-hospital-800 mb-3">Benefits include:</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-hospital-600 mr-2 flex-shrink-0" />
                      <span className="text-hospital-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            <div className="w-full md:w-1/2">
              <AuthForm formType="signup" onSuccess={handleSuccessfulSignup} />
              
              <div className="mt-8 md:hidden">
                <h3 className="text-xl font-medium text-hospital-800 mb-3 text-center">Benefits include:</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-hospital-600 mr-2 flex-shrink-0" />
                      <span className="text-hospital-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
