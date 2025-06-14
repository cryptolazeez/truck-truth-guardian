
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const success = login(username, password);
    if (success) {
      navigate('/stats');
    } else {
      setError('Invalid admin credentials');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 text-white py-4 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-blue-500 p-2 rounded-lg group-hover:bg-blue-400 transition-colors">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">TruckWatch</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors font-medium">Home</Link>
            <Link to="/report" className="hover:text-blue-400 transition-colors font-medium">Report</Link>
            <Link to="/search" className="hover:text-blue-400 transition-colors font-medium">Search</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Admin Login Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] py-12 px-6">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-3xl font-bold text-slate-800">Admin Access</CardTitle>
                <p className="text-slate-600 font-medium">Secure administrative dashboard</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3 animate-in slide-in-from-top-2">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-red-700 font-medium">{error}</span>
                  </div>
                )}
                
                <div className="space-y-3">
                  <Label htmlFor="username" className="text-sm font-semibold text-slate-700">
                    Username
                  </Label>
                  <Input 
                    id="username" 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder="Enter admin username" 
                    className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    required 
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-sm font-semibold text-slate-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      placeholder="Enter admin password" 
                      className="h-12 pr-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      required 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4" />
                      <span>Sign In as Admin</span>
                    </div>
                  )}
                </Button>
              </form>

              <div className="pt-4 border-t border-slate-200">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium text-blue-800 mb-1">Demo Credentials</p>
                  <p className="text-xs text-blue-600">
                    <span className="font-mono bg-white px-2 py-1 rounded">admin</span> / <span className="font-mono bg-white px-2 py-1 rounded">admin123</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
