
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PatientDashboard from '@/components/dashboard/PatientDashboard';
import FadeIn from '@/components/animations/FadeIn';
import { LogOut } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    // In a real app, we would clear auth tokens here
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-hospital-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-8 flex justify-between items-center">
            <FadeIn>
              <h1 className="text-2xl font-bold text-hospital-900">Patient Dashboard</h1>
            </FadeIn>
            
            <FadeIn delay={100}>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-hospital-700 hover:text-hospital-800"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </FadeIn>
          </div>
          
          <PatientDashboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
