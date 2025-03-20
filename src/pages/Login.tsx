
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';

const Login = () => {
  const navigate = useNavigate();

  const handleSuccessfulLogin = () => {
    // In a real application, this would set auth state or token
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-hospital-50 to-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn delay={100} className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-hospital-900 mb-4">
                Welcome Back
              </h1>
              <p className="text-lg text-hospital-700 max-w-md">
                Log in to your PatientConnect account to manage appointments, access medical records, and connect with healthcare providers.
              </p>
            </FadeIn>
            
            <div className="w-full md:w-1/2">
              <AuthForm formType="login" onSuccess={handleSuccessfulLogin} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
