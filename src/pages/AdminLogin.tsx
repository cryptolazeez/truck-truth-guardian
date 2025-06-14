
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
          {/* Form container matching the CSS design */}
          <div className="flex flex-col gap-2.5 bg-white p-8 w-full max-w-[450px] rounded-[20px] shadow-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>
            
            {/* Header */}
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-4">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Admin Access</h2>
              <p className="text-gray-600 text-sm">Secure administrative dashboard</p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 font-medium text-sm">{error}</span>
                </div>
              )}
              
              {/* Username Field */}
              <div className="flex flex-col">
                <label className="text-[#151717] font-semibold mb-2">Username</label>
                <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-2.5 transition-all duration-200 ease-in-out focus-within:border-[#2d79f3]">
                  <Lock className="h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder="Enter admin username"
                    className="ml-2.5 rounded-[10px] border-none w-[85%] h-full outline-none"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}
                    required 
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <label className="text-[#151717] font-semibold mb-2">Password</label>
                <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-2.5 transition-all duration-200 ease-in-out focus-within:border-[#2d79f3]">
                  <Lock className="h-5 w-5 text-gray-400" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Enter admin password"
                    className="ml-2.5 rounded-[10px] border-none w-[75%] h-full outline-none"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segeo UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="mt-5 mb-2.5 bg-[#151717] border-none text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full cursor-pointer transition-colors hover:bg-[#252727] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <span>Sign In as Admin</span>
                )}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-2.5 pt-4 border-t border-gray-200">
              <p className="text-center text-black text-sm mb-1">Demo Credentials</p>
              <p className="text-center text-sm text-gray-600">
                Username: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-[#2d79f3] font-medium">admin</span> / 
                Password: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-[#2d79f3] font-medium">admin123</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
