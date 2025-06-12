
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Search, BarChart3, Phone, MapPin, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-slate-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Truck Truth Tracker</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/report" className="hover:text-blue-400 transition-colors">Report</Link>
            <Link to="/search" className="hover:text-blue-400 transition-colors">Search</Link>
            <Link to="/stats" className="hover:text-blue-400 transition-colors">Stats</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Making Roads Safer, One Report at a Time
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-3xl mx-auto animate-fade-in">
            Together, we can make trucking safer for everyone. Report dangerous driving behavior 
            and check safety records to protect our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/report">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Report Now
              </Button>
            </Link>
            <Link to="/search">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                <Search className="mr-2 h-5 w-5" />
                Search Safety Record
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">
            How Truck Truth Tracker Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Report Incidents</h4>
                <p className="text-slate-600">
                  Quickly report dangerous truck driving behavior with time, location, 
                  truck details, and optional photo evidence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Search Records</h4>
                <p className="text-slate-600">
                  Look up any truck driver's safety record using license plate 
                  or driver ID to make informed decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">View Analytics</h4>
                <p className="text-slate-600">
                  Access real-time analytics including safety ratings, 
                  report trends, and dangerous area heatmaps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2,847</div>
              <div className="text-slate-300">Reports Filed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1,563</div>
              <div className="text-slate-300">Drivers Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">94%</div>
              <div className="text-slate-300">Safety Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-300">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Join the Movement for Safer Roads
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Every report makes a difference. Help us create accountability 
            in the trucking industry and protect everyone on the road.
          </p>
          <Link to="/report">
            <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">Truck Truth Tracker</span>
            </div>
            <p className="text-slate-400">
              Making trucking safer for everyone through community-driven accountability.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/report" className="block text-slate-400 hover:text-white transition-colors">Report Incident</Link>
              <Link to="/search" className="block text-slate-400 hover:text-white transition-colors">Search Records</Link>
              <Link to="/stats" className="block text-slate-400 hover:text-white transition-colors">View Stats</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-TRUCK-SAFE</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Truck Truth Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
