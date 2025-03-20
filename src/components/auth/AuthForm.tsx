
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import BlurCard from '@/components/ui/BlurCard';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

interface AuthFormProps {
  formType: 'login' | 'signup';
  onSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ formType, onSuccess }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validation
      if (!formData.email || !formData.password) {
        throw new Error('Please fill in all required fields');
      }

      if (formType === 'signup') {
        if (!formData.name) {
          throw new Error('Please enter your name');
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        if (formData.password.length < 8) {
          throw new Error('Password must be at least 8 characters');
        }
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For this demo, we'll just simulate a successful login/signup
      if (formType === 'login') {
        // In a real app, this would validate credentials
        toast({
          title: 'Welcome back!',
          description: 'You have successfully logged in.',
        });
      } else {
        // In a real app, this would create a new account
        toast({
          title: 'Account created!',
          description: 'Your account has been successfully created.',
        });
      }

      // Redirect on success
      if (onSuccess) {
        onSuccess();
      }
      
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'An unknown error occurred',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn duration={800}>
      <BlurCard className="w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-medium text-hospital-900">
            {formType === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="text-hospital-600 mt-2">
            {formType === 'login'
              ? 'Sign in to access your patient portal'
              : 'Join PatientConnect for better healthcare management'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {formType === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full"
                disabled={loading}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full"
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pr-10"
                disabled={loading}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-hospital-500 hover:text-hospital-700"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {formType === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pr-10"
                  disabled={loading}
                  required
                />
              </div>
            </div>
          )}

          {formType === 'login' && (
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-hospital-600 hover:text-hospital-800 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          )}

          <Button
            type="submit"
            className={cn(
              'w-full bg-hospital-600 hover:bg-hospital-700 text-white flex items-center justify-center gap-2',
              loading && 'opacity-70 cursor-not-allowed'
            )}
            disabled={loading}
          >
            {loading ? (
              <>Processing...</>
            ) : formType === 'login' ? (
              <>Sign In <ArrowRight className="h-4 w-4 ml-1" /></>
            ) : (
              <>Create Account <ArrowRight className="h-4 w-4 ml-1" /></>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-hospital-600">
            {formType === 'login' ? (
              <>
                Don't have an account?{' '}
                <a
                  href="/signup"
                  className="font-medium text-hospital-700 hover:text-hospital-800 hover:underline"
                >
                  Sign up
                </a>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <a
                  href="/login"
                  className="font-medium text-hospital-700 hover:text-hospital-800 hover:underline"
                >
                  Sign in
                </a>
              </>
            )}
          </p>
        </div>
      </BlurCard>
    </FadeIn>
  );
};

export default AuthForm;
