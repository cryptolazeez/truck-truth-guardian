
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Eye, EyeClosed } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-foreground">Truck Truth Tracker</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Sign in to your account</h2>
            <p className="text-muted-foreground">Start your journey to safer roads</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Work email*
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password*
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeClosed className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Sign in
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button type="button" variant="outline" className="w-full">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up
              </Link>
            </p>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            <p>Protecting over 1 million drivers nationwide</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <div className="flex items-center">
                <span className="text-yellow-500">⭐</span>
                <span className="ml-1 font-medium">4.8</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500">⭐</span>
                <span className="ml-1 font-medium">4.8</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500">⭐</span>
                <span className="ml-1 font-medium">4.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Testimonial */}
      <div className="flex-1 bg-slate-800 text-white flex items-center justify-center px-8 py-12 relative overflow-hidden">
        <div className="max-w-lg text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <blockquote className="text-xl leading-relaxed">
              "I forgot to create our daily route before leaving work today. I managed to do it in minutes on the go. Great product, even from a mobile device."
            </blockquote>
          </div>
          
          {/* Mobile mockup illustration */}
          <div className="flex justify-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-48 h-80 border border-white/20">
              <div className="bg-blue-600 rounded-t-lg h-6 mb-2 flex items-center justify-center">
                <div className="w-16 h-1 bg-white/50 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-32 bg-blue-100/20 rounded"></div>
                <div className="space-y-1">
                  <div className="h-3 bg-white/30 rounded"></div>
                  <div className="h-3 bg-white/20 rounded"></div>
                  <div className="h-3 bg-white/20 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-64 h-80 border border-white/20">
              <div className="bg-white rounded-t-lg h-6 mb-2"></div>
              <div className="space-y-2">
                <div className="h-24 bg-gray-200/30 rounded"></div>
                <div className="space-y-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-2 bg-white/30 rounded w-1/2"></div>
                      <div className="h-2 bg-white/20 rounded w-1/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-600 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
