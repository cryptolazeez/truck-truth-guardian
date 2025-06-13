import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, AlertCircle } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {
    login
  } = useAdmin();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(username, password);
    if (success) {
      navigate('/stats');
    } else {
      setError('Invalid admin credentials');
    }
  };
  return <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-slate-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Truck Truth Tracker</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/report" className="hover:text-blue-400 transition-colors">Report</Link>
            <Link to="/search" className="hover:text-blue-400 transition-colors">Search</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Admin Login Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] py-12 px-6">
        <Card className="w-full max-w-md shadow-lg bg-slate-50">
          <CardHeader className="text-center bg-white">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-slate-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800">Admin Login</CardTitle>
            <p className="text-slate-600">Access the administrative dashboard</p>
          </CardHeader>
          <CardContent className="bg-gray-50">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>}
              
              <div className="space-y-2 bg-lime-50">
                <Label htmlFor="username" className="text-sm font-medium bg-slate-50">
                  Username
                </Label>
                <Input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter admin username" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter admin password" required />
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-400 text-slate-50">
                <Lock className="mr-2 h-4 w-4" />
                Sign In as Admin
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Demo credentials: admin / admin123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminLogin;