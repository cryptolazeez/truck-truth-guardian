
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Camera, MapPin, Clock, Truck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Report = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    datetime: '',
    location: '',
    licensePlate: '',
    truckNumber: '',
    company: '',
    behaviorType: '',
    description: '',
    photo: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', formData);
    toast({
      title: "Report Submitted Successfully",
      description: "Thank you for helping make our roads safer. Your report has been recorded.",
    });
    // Reset form
    setFormData({
      datetime: '',
      location: '',
      licensePlate: '',
      truckNumber: '',
      company: '',
      behaviorType: '',
      description: '',
      photo: null
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, photo: file }));
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
            <Link to="/report" className="text-blue-400">Report</Link>
            <Link to="/search" className="hover:text-blue-400 transition-colors">Search</Link>
            <Link to="/stats" className="hover:text-blue-400 transition-colors">Stats</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-12 w-12 mr-3" />
            <h2 className="text-4xl font-bold">Report Dangerous Driving</h2>
          </div>
          <p className="text-xl text-red-100">
            Help protect everyone on the road by reporting unsafe truck driving behavior
          </p>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Incident Report Form</CardTitle>
              <p className="text-slate-600">
                Please provide as much detail as possible about the incident. All fields marked with * are required.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="datetime" className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Date & Time *
                    </Label>
                    <Input
                      id="datetime"
                      type="datetime-local"
                      value={formData.datetime}
                      onChange={(e) => handleInputChange('datetime', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Location *
                    </Label>
                    <Input
                      id="location"
                      placeholder="Highway, city, mile marker, etc."
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Truck Information */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="licensePlate" className="flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      License Plate *
                    </Label>
                    <Input
                      id="licensePlate"
                      placeholder="ABC-1234"
                      value={formData.licensePlate}
                      onChange={(e) => handleInputChange('licensePlate', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="truckNumber">Truck/Fleet Number</Label>
                    <Input
                      id="truckNumber"
                      placeholder="Optional"
                      value={formData.truckNumber}
                      onChange={(e) => handleInputChange('truckNumber', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="If visible"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Behavior Type */}
                <div className="space-y-2">
                  <Label htmlFor="behaviorType">Type of Dangerous Behavior *</Label>
                  <Select value={formData.behaviorType} onValueChange={(value) => handleInputChange('behaviorType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select behavior type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="speeding">Excessive Speeding</SelectItem>
                      <SelectItem value="aggressive">Aggressive Driving</SelectItem>
                      <SelectItem value="weaving">Weaving/Lane Changes</SelectItem>
                      <SelectItem value="tailgating">Tailgating</SelectItem>
                      <SelectItem value="running-lights">Running Red Lights/Signs</SelectItem>
                      <SelectItem value="phone">Phone/Distracted Driving</SelectItem>
                      <SelectItem value="fatigue">Signs of Fatigue</SelectItem>
                      <SelectItem value="road-rage">Road Rage</SelectItem>
                      <SelectItem value="unsafe-passing">Unsafe Passing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Detailed Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe what happened in detail. Include any relevant circumstances, weather conditions, traffic, etc."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="photo" className="flex items-center">
                    <Camera className="h-4 w-4 mr-2" />
                    Photo Evidence (Optional)
                  </Label>
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full"
                  />
                  <p className="text-sm text-slate-500">
                    Upload a photo if you have visual evidence of the incident
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Submit Report
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Safety Notice */}
          <Card className="mt-8 bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Safety Notice</h3>
                  <p className="text-amber-700">
                    Only report incidents after ensuring your own safety. Never attempt to 
                    confront dangerous drivers directly. If you witness immediate danger, 
                    call 911 first, then file a report here later.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Report;
