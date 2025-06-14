import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search as SearchIcon, AlertTriangle, CheckCircle, XCircle, Star, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Mock data for demonstration
  const mockDriverData = {
    licensePlate: 'ABC-1234',
    driverId: 'D12345678',
    company: 'SafeHaul Logistics',
    safetyRating: 3.2,
    totalReports: 8,
    lastIncident: '2024-01-15',
    yearsActive: 5,
    recentReports: [{
      id: 1,
      date: '2024-01-15',
      location: 'I-95 North, Mile 247',
      behavior: 'Aggressive Driving',
      severity: 'High'
    }, {
      id: 2,
      date: '2024-01-10',
      location: 'Highway 101, San Francisco',
      behavior: 'Speeding',
      severity: 'Medium'
    }, {
      id: 3,
      date: '2023-12-28',
      location: 'I-10 West, Phoenix',
      behavior: 'Unsafe Passing',
      severity: 'Medium'
    }]
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    console.log('Searching for:', searchQuery);

    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockDriverData);
      setIsSearching(false);
    }, 1500);
  };
  const getSafetyRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };
  const getSafetyRatingText = (rating: number) => {
    if (rating >= 4) return 'Good';
    if (rating >= 3) return 'Fair';
    return 'Poor';
  };
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div className="min-h-screen bg-zinc-50">
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
            <Link to="/search" className="text-blue-400">Search</Link>
            <Link to="/stats" className="hover:text-blue-400 transition-colors">Stats</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <SearchIcon className="h-12 w-12 mr-3" />
            <h2 className="text-4xl font-bold">Search Safety Records</h2>
          </div>
          <p className="text-xl text-blue-100">
            Look up any truck driver's safety history and rating
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="bg-yellow-200">
              <CardTitle className="text-2xl text-slate-800">Driver Safety Lookup</CardTitle>
              <p className="text-slate-600">
                Enter a license plate number or driver ID to view safety records and ratings
              </p>
            </CardHeader>
            <CardContent className="bg-yellow-200">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="search">License Plate or Driver ID</Label>
                  <div className="flex gap-4">
                    <Input id="search" placeholder="e.g., ABC-1234 or D12345678" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="flex-1 bg-slate-950" />
                    <Button type="submit" disabled={isSearching} className="bg-blue-600 hover:bg-blue-700 px-6 text-neutral-50">
                      {isSearching ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <>
                          <SearchIcon className="mr-2 h-4 w-4" />
                          Search
                        </>}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Search Results */}
          {searchResults && <div className="mt-8 space-y-6 animate-fade-in">
              {/* Driver Overview */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Driver Safety Profile</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < Math.round(searchResults.safetyRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                      </div>
                      <span className={`text-2xl font-bold ${getSafetyRatingColor(searchResults.safetyRating)}`}>
                        {searchResults.safetyRating}/5.0
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm text-slate-500">License Plate</Label>
                        <p className="text-lg font-semibold">{searchResults.licensePlate}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-slate-500">Company</Label>
                        <p className="text-lg">{searchResults.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm text-slate-500">Safety Rating</Label>
                        <p className={`text-lg font-semibold ${getSafetyRatingColor(searchResults.safetyRating)}`}>
                          {getSafetyRatingText(searchResults.safetyRating)}
                        </p>
                      </div>
                      <div>
                        <Label className="text-sm text-slate-500">Years Active</Label>
                        <p className="text-lg">{searchResults.yearsActive} years</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm text-slate-500">Total Reports</Label>
                        <p className="text-lg font-semibold text-red-600">{searchResults.totalReports}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-slate-500">Last Incident</Label>
                        <p className="text-lg">{new Date(searchResults.lastIncident).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      {searchResults.safetyRating >= 4 ? <CheckCircle className="h-5 w-5 text-green-600" /> : searchResults.safetyRating >= 3 ? <AlertTriangle className="h-5 w-5 text-yellow-600" /> : <XCircle className="h-5 w-5 text-red-600" />}
                      <span className="font-medium">
                        Safety Assessment: {getSafetyRatingText(searchResults.safetyRating)} Driver
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Incident Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="recent" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="recent">Recent Reports</TabsTrigger>
                      <TabsTrigger value="history">Full History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="recent" className="space-y-4">
                      {searchResults.recentReports.map((report: any) => <Card key={report.id} className="border-l-4 border-l-red-500">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-slate-500" />
                                <span className="text-sm text-slate-500">
                                  {new Date(report.date).toLocaleDateString()}
                                </span>
                              </div>
                              <Badge className={getSeverityColor(report.severity)}>
                                {report.severity}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-lg mb-1">{report.behavior}</h4>
                            <div className="flex items-center space-x-1 text-slate-600">
                              <MapPin className="h-4 w-4" />
                              <span>{report.location}</span>
                            </div>
                          </CardContent>
                        </Card>)}
                    </TabsContent>
                    <TabsContent value="history">
                      <p className="text-slate-600 text-center py-8">
                        Full history view would show all {searchResults.totalReports} reports with filtering and pagination options.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>}

          {/* Info Card */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6 bg-green-400">
              <div className="flex items-start space-x-3 bg-green-400">
                <SearchIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-slate-100">How Safety Ratings Work</h3>
                  <p className="mb-2 text-slate-100">
                    Our safety ratings are calculated based on the number and severity of reported incidents, 
                    years of driving experience, and improvement trends over time.
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li className="bg-[#afebff]/[0.31]">• 4.0-5.0: Excellent safety record</li>
                    <li>• 3.0-3.9: Fair safety record, some concerns</li>
                    <li>• Below 3.0: Poor safety record, multiple incidents</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Search;