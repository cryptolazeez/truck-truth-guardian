
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart3, TrendingUp, MapPin, AlertTriangle, Users, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Stats = () => {
  // Mock data for demonstration
  const statsData = {
    totalReports: 2847,
    driversTracked: 1563,
    safetyImprovement: 94,
    activeUsers: 15420,
    topBehaviors: [
      { behavior: 'Speeding', count: 856, percentage: 30 },
      { behavior: 'Aggressive Driving', count: 625, percentage: 22 },
      { behavior: 'Unsafe Passing', count: 512, percentage: 18 },
      { behavior: 'Tailgating', count: 398, percentage: 14 },
      { behavior: 'Phone Use', count: 285, percentage: 10 },
      { behavior: 'Other', count: 171, percentage: 6 }
    ],
    dangerousAreas: [
      { area: 'I-95 Corridor', reports: 234, state: 'Multi-State' },
      { area: 'I-10 Phoenix Area', reports: 189, state: 'Arizona' },
      { area: 'Highway 101 SF Bay', reports: 156, state: 'California' },
      { area: 'I-75 Atlanta Metro', reports: 143, state: 'Georgia' },
      { area: 'I-4 Orlando-Tampa', reports: 128, state: 'Florida' }
    ],
    monthlyTrends: [
      { month: 'Jan', reports: 234 },
      { month: 'Feb', reports: 267 },
      { month: 'Mar', reports: 298 },
      { month: 'Apr', reports: 312 },
      { month: 'May', reports: 289 },
      { month: 'Jun', reports: 356 }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
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
            <Link to="/stats" className="text-blue-400">Stats</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-12 w-12 mr-3" />
            <h2 className="text-4xl font-bold">Safety Analytics</h2>
          </div>
          <p className="text-xl text-green-100">
            Real-time insights into trucking safety trends and danger zones
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {statsData.totalReports.toLocaleString()}
                </div>
                <div className="text-slate-600">Total Reports</div>
                <div className="flex items-center justify-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-sm">+12% this month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {statsData.driversTracked.toLocaleString()}
                </div>
                <div className="text-slate-600">Drivers Tracked</div>
                <div className="flex items-center justify-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-sm">+8% this month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {statsData.safetyImprovement}%
                </div>
                <div className="text-slate-600">Safety Improvement</div>
                <div className="flex items-center justify-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-sm">+3% this quarter</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">24/7</div>
                <div className="text-slate-600">Active Monitoring</div>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-blue-500 text-sm">Real-time tracking</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Behavior Analytics */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Most Reported Behaviors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statsData.topBehaviors.map((behavior, index) => (
                    <div key={behavior.behavior} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{behavior.behavior}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-slate-600">{behavior.count} reports</span>
                          <Badge variant="outline">{behavior.percentage}%</Badge>
                        </div>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${behavior.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  High-Risk Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statsData.dangerousAreas.map((area, index) => (
                    <div key={area.area} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium">{area.area}</div>
                        <div className="text-sm text-slate-600">{area.state}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600">{area.reports}</div>
                        <div className="text-sm text-slate-500">reports</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Trends */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Reporting Trends (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-4">
                {statsData.monthlyTrends.map((month, index) => (
                  <div key={month.month} className="text-center">
                    <div className="bg-slate-200 rounded-lg p-4 mb-2">
                      <div
                        className="bg-gradient-to-t from-blue-500 to-blue-600 rounded mx-auto transition-all duration-500"
                        style={{
                          height: `${(month.reports / 400) * 100}px`,
                          width: '20px'
                        }}
                      ></div>
                    </div>
                    <div className="text-sm font-medium">{month.month}</div>
                    <div className="text-xs text-slate-600">{month.reports}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Heatmap Placeholder */}
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                National Safety Heatmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-100 rounded-lg p-12 text-center">
                <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">Interactive Map Coming Soon</h3>
                <p className="text-slate-500">
                  Real-time heatmap showing incident density across major highways and cities.
                  This will help identify the most dangerous routes and times for trucking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Stats;
