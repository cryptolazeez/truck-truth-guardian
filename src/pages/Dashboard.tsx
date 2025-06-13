
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Upload, Calendar } from 'lucide-react';
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
      <nav className="bg-slate-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Truck Truth Tracker</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/dashboard" className="text-blue-400">Dashboard</Link>
            <Link to="/search" className="hover:text-blue-400 transition-colors">Search</Link>
            <Link to="/stats" className="hover:text-blue-400 transition-colors">Stats</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 rounded-full p-4 mr-4">
              <AlertTriangle className="h-12 w-12" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-2">Report a Driver</h2>
              <p className="text-xl text-orange-100">
                Help keep our roads safe by reporting dangerous or unprofessional driving behavior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-t-lg">
              <CardTitle className="text-2xl text-slate-800 flex items-center">
                <AlertTriangle className="mr-3 h-6 w-6 text-orange-600" />
                Driver Report Form
              </CardTitle>
              <p className="text-slate-600 mt-2">
                Please provide as much detail as possible. Fields marked with * are required.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Driver Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                    Driver Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="driverName" className="text-sm font-medium">
                        Driver Name *
                      </Label>
                      <Input
                        id="driverName"
                        placeholder="Enter driver's name"
                        value={formData.driverName}
                        onChange={(e) => handleInputChange('driverName', e.target.value)}
                        required
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="truckingCompany" className="text-sm font-medium">
                        Trucking Company *
                      </Label>
                      <Input
                        id="truckingCompany"
                        placeholder="Enter company name"
                        value={formData.truckingCompany}
                        onChange={(e) => handleInputChange('truckingCompany', e.target.value)}
                        required
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="licensePlate" className="text-sm font-medium">
                        License Plate
                      </Label>
                      <Input
                        id="licensePlate"
                        placeholder="Enter license plate"
                        value={formData.licensePlate}
                        onChange={(e) => handleInputChange('licensePlate', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="truckDescription" className="text-sm font-medium">
                        Truck Description
                      </Label>
                      <Input
                        id="truckDescription"
                        placeholder="Color, make, model, etc."
                        value={formData.truckDescription}
                        onChange={(e) => handleInputChange('truckDescription', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="driverIdPhoto" className="flex items-center text-sm font-medium">
                      <Upload className="h-4 w-4 mr-2 text-slate-500" />
                      Driver ID/License (Optional)
                    </Label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-slate-400 mb-2" />
                      <p className="text-sm text-blue-600 mb-2">Upload driver's license or ID photo</p>
                      <p className="text-xs text-slate-500 mb-4">PNG, JPG up to 5MB</p>
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

                {/* Incident Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                    Incident Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="incidentType" className="text-sm font-medium">
                        Incident Type *
                      </Label>
                      <Select value={formData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
                        <SelectTrigger className="border-slate-300 focus:border-orange-500 focus:ring-orange-500">
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
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="dateOfIncident" className="flex items-center text-sm font-medium">
                        <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                        Date of Incident
                      </Label>
                      <Input
                        id="dateOfIncident"
                        type="date"
                        value={formData.dateOfIncident}
                        onChange={(e) => handleInputChange('dateOfIncident', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="location" className="text-sm font-medium">
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="City, state, highway, mile marker, etc."
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="description" className="text-sm font-medium">
                      Description of Incident *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide a detailed description of what happened..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                      rows={5}
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Reporter Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                    Reporter Information (Optional)
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="reporterName" className="text-sm font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="reporterName"
                        placeholder="Optional"
                        value={formData.reporterName}
                        onChange={(e) => handleInputChange('reporterName', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="contactInfo" className="text-sm font-medium">
                        Contact Info
                      </Label>
                      <Input
                        id="contactInfo"
                        placeholder="Email or phone (optional)"
                        value={formData.contactInfo}
                        onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Submit Report
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
