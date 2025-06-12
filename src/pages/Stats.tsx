import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart3, TrendingUp, MapPin, AlertTriangle, Users, Calendar, Clock, User, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

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
    ],
    driverReviews: [
      {
        id: "D-12345",
        name: "John Martinez",
        license: "CDL-TX-789456",
        totalRating: 4.2,
        overallRating: 4.5,
        ratingTrend: [4.1, 3.8, 4.0, 4.3, 4.2],
        safetyScore: 85,
        status: "Good standing, monitor speed compliance",
        trainingProgress: {
          courseName: "Defensive Driving Training",
          description: "Designed to improve road safety and reduce incident reports.",
          progress: 65
        }
      },
      {
        id: "D-67890",
        name: "Sarah Johnson",
        license: "CDL-CA-123789",
        totalRating: 3.6,
        overallRating: 4.5,
        ratingTrend: [3.2, 3.4, 3.8, 3.5, 3.6],
        safetyScore: 72,
        status: "Average performance, contact HR for guidance",
        trainingProgress: {
          courseName: "Team Diversity Training",
          description: "Designed to foster inclusivity and leverage diverse perspectives.",
          progress: 25
        }
      }
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

          {/* Driver Reviews Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Driver Performance Reviews</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {statsData.driverReviews.map((driver) => (
                <div key={driver.id} className="space-y-4">
                  {/* Employee Rating Card */}
                  <div className="bg-slate-800 text-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-slate-700 p-2 rounded-lg">
                          <User className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold">Driver Rating</h3>
                      </div>
                      <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition-colors">
                        Details
                      </button>
                    </div>

                    <div className="border-t border-slate-700 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-slate-400 text-sm uppercase tracking-wide mb-2">TOTAL RATING</p>
                          <div className="flex items-center space-x-3">
                            <div className="text-yellow-400 text-2xl">⭐</div>
                            <span className="text-3xl font-bold">{driver.totalRating}/5</span>
                            <span className="text-slate-400">(Overall {driver.overallRating})</span>
                          </div>
                        </div>
                        <div className="w-32 h-16">
                          {/* Simple trend line visualization */}
                          <svg className="w-full h-full" viewBox="0 0 120 60">
                            <path
                              d={`M 0 ${60 - (driver.ratingTrend[0] - 3) * 20} ${driver.ratingTrend.map((rating, index) => 
                                `L ${(index + 1) * 24} ${60 - (rating - 3) * 20}`
                              ).join(' ')}`}
                              fill="none"
                              stroke="#8b5cf6"
                              strokeWidth="3"
                              className="drop-shadow-sm"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-slate-300 text-sm">{driver.status}</span>
                        <Info className="h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Course Progress Card */}
                  <div className="bg-slate-800 text-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-slate-700 p-2 rounded-lg">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold">Training Progress</h3>
                      </div>
                      <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition-colors">
                        See All
                      </button>
                    </div>

                    <div className="border-t border-slate-700 pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full border-4 border-slate-700 flex items-center justify-center">
                            <div className="text-2xl font-bold">{driver.trainingProgress.progress}%</div>
                          </div>
                          <svg className="absolute top-0 left-0 w-20 h-20 -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              fill="none"
                              stroke="#8b5cf6"
                              strokeWidth="4"
                              strokeDasharray={`${driver.trainingProgress.progress * 2.26} 226`}
                              className="transition-all duration-500"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{driver.trainingProgress.courseName}</h4>
                          <p className="text-slate-400 text-sm mb-4">{driver.trainingProgress.description}</p>
                          <button className="text-purple-400 hover:text-purple-300 text-sm underline transition-colors">
                            Resume Course
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Driver Info */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-800">{driver.name}</h4>
                        <p className="text-sm text-slate-600">{driver.license}</p>
                        <p className="text-sm text-slate-600">Safety Score: {driver.safetyScore}%</p>
                      </div>
                      <Badge variant={driver.safetyScore >= 80 ? "default" : "secondary"}>
                        {driver.safetyScore >= 80 ? "Good" : "Needs Improvement"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          <Card className="shadow-lg mb-8">
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
          <Card className="shadow-lg">
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
