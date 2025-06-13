
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Upload, Calendar, MapPin, User, Truck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    driverName: '',
    truckingCompany: '',
    licensePlate: '',
    truckDescription: '',
    driverIdPhoto: null as File | null,
    incidentType: '',
    dateOfIncident: '',
    location: '',
    description: '',
    reporterName: '',
    contactInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', formData);
    toast({
      title: "Report Submitted Successfully",
      description: "Thank you for helping make our roads safer. Your report has been recorded.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, driverIdPhoto: file }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-300" />
            <h1 className="text-2xl font-bold">Truck Truth Tracker</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/dashboard" className="text-blue-300 font-semibold">Report</Link>
            <Link to="/search" className="hover:text-blue-300 transition-colors">Search</Link>
            <Link to="/stats" className="hover:text-blue-300 transition-colors">Stats</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-10 w-10 mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Report Dangerous Truck Driver</h1>
              <p className="text-red-100 mt-2">Help keep our roads safe by reporting dangerous driving behavior</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="shadow-lg border border-gray-200">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl text-gray-800 flex items-center">
              <FileText className="mr-2 h-5 w-5 text-red-600" />
              Driver Report Form
            </CardTitle>
            <p className="text-gray-600 text-sm mt-1">
              Please provide as much detail as possible. Fields marked with * are required.
            </p>
          </CardHeader>
          
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Driver Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-200 flex items-center">
                  <User className="mr-2 h-5 w-5 text-blue-600" />
                  Driver Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="driverName" className="text-sm font-medium text-gray-700">
                      Driver Name *
                    </Label>
                    <Input
                      id="driverName"
                      placeholder="Enter driver's name"
                      value={formData.driverName}
                      onChange={(e) => handleInputChange('driverName', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="truckingCompany" className="text-sm font-medium text-gray-700">
                      Trucking Company *
                    </Label>
                    <Input
                      id="truckingCompany"
                      placeholder="Enter company name"
                      value={formData.truckingCompany}
                      onChange={(e) => handleInputChange('truckingCompany', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="licensePlate" className="text-sm font-medium text-gray-700">
                      License Plate
                    </Label>
                    <Input
                      id="licensePlate"
                      placeholder="Enter license plate"
                      value={formData.licensePlate}
                      onChange={(e) => handleInputChange('licensePlate', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="truckDescription" className="text-sm font-medium text-gray-700">
                      Truck Description
                    </Label>
                    <Input
                      id="truckDescription"
                      placeholder="Color, make, model, etc."
                      value={formData.truckDescription}
                      onChange={(e) => handleInputChange('truckDescription', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="driverIdPhoto" className="text-sm font-medium text-gray-700 flex items-center">
                    <Upload className="h-4 w-4 mr-1" />
                    Driver ID/License (Optional)
                  </Label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload driver's license or ID photo</p>
                    <p className="text-xs text-gray-500 mb-3">PNG, JPG up to 5MB</p>
                    <Input
                      id="driverIdPhoto"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('driverIdPhoto')?.click()}
                    >
                      Choose File
                    </Button>
                    {formData.driverIdPhoto && (
                      <p className="text-sm text-green-600 mt-2">
                        File selected: {formData.driverIdPhoto.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Incident Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-200 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-orange-600" />
                  Incident Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="incidentType" className="text-sm font-medium text-gray-700">
                      Incident Type *
                    </Label>
                    <Select value={formData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aggressive-driving">Aggressive Driving</SelectItem>
                        <SelectItem value="reckless-driving">Reckless Driving</SelectItem>
                        <SelectItem value="road-rage">Road Rage</SelectItem>
                        <SelectItem value="unsafe-lane-change">Unsafe Lane Change</SelectItem>
                        <SelectItem value="speeding">Speeding</SelectItem>
                        <SelectItem value="tailgating">Tailgating</SelectItem>
                        <SelectItem value="distracted-driving">Distracted Driving</SelectItem>
                        <SelectItem value="failure-to-signal">Failure to Signal</SelectItem>
                        <SelectItem value="blocking-traffic">Blocking Traffic</SelectItem>
                        <SelectItem value="running-red-lights">Running Red Lights</SelectItem>
                        <SelectItem value="unsafe-passing">Unsafe Passing</SelectItem>
                        <SelectItem value="improper-lane-usage">Improper Lane Usage</SelectItem>
                        <SelectItem value="following-too-closely">Following Too Closely</SelectItem>
                        <SelectItem value="erratic-behavior">Erratic Behavior</SelectItem>
                        <SelectItem value="fatigue-signs">Signs of Fatigue</SelectItem>
                        <SelectItem value="substance-impairment">Suspected Substance Impairment</SelectItem>
                        <SelectItem value="equipment-violations">Equipment Violations</SelectItem>
                        <SelectItem value="cargo-issues">Cargo/Load Issues</SelectItem>
                        <SelectItem value="hours-violation">Hours of Service Violations</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dateOfIncident" className="text-sm font-medium text-gray-700 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Date of Incident
                    </Label>
                    <Input
                      id="dateOfIncident"
                      type="date"
                      value={formData.dateOfIncident}
                      onChange={(e) => handleInputChange('dateOfIncident', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, state, highway, mile marker, etc."
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Description of Incident *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide a detailed description of what happened..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Reporter Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-200">
                  Reporter Information (Optional)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reporterName" className="text-sm font-medium text-gray-700">
                      Your Name
                    </Label>
                    <Input
                      id="reporterName"
                      placeholder="Optional"
                      value={formData.reporterName}
                      onChange={(e) => handleInputChange('reporterName', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactInfo" className="text-sm font-medium text-gray-700">
                      Contact Info
                    </Label>
                    <Input
                      id="contactInfo"
                      placeholder="Email or phone (optional)"
                      value={formData.contactInfo}
                      onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                >
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Submit Report
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
