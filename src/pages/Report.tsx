import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Camera, MapPin, Clock, Truck, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
const Report = () => {
  const {
    toast
  } = useToast();
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
      description: "Thank you for helping make our roads safer. Your report has been recorded."
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
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-slate-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">TruckWatch</h1>
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
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 rounded-full p-4 mr-4">
              <AlertTriangle className="h-12 w-12" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-2">Report Dangerous Driving</h2>
              <p className="text-xl text-red-100">
                Help protect everyone on the road by reporting unsafe truck driving behavior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-t-lg">
                  <CardTitle className="text-2xl text-slate-800 flex items-center">
                    <FileText className="mr-3 h-6 w-6 text-red-600" />
                    Incident Report Form
                  </CardTitle>
                  <p className="text-slate-600 mt-2">
                    Please provide as much detail as possible. Fields marked with * are required.
                  </p>
                </CardHeader>
                <CardContent className="p-8 bg-gray-300">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* When & Where Section */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                        When & Where
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="datetime" className="flex items-center text-sm font-medium">
                            <Clock className="h-4 w-4 mr-2 text-slate-500" />
                            Date & Time *
                          </Label>
                          <Input id="datetime" type="datetime-local" value={formData.datetime} onChange={e => handleInputChange('datetime', e.target.value)} required className="border-slate-300 focus:border-red-500 focus:ring-red-500 bg-gray-50" />
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="location" className="flex items-center text-sm font-medium">
                            <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                            Location *
                          </Label>
                          <Input id="location" placeholder="Highway, city, mile marker, etc." value={formData.location} onChange={e => handleInputChange('location', e.target.value)} required className="border-slate-300 focus:border-red-500 focus:ring-red-500" />
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Information Section */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                        Vehicle Information
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="licensePlate" className="flex items-center text-sm font-medium">
                            <Truck className="h-4 w-4 mr-2 text-slate-500" />
                            License Plate *
                          </Label>
                          <Input id="licensePlate" placeholder="ABC-1234" value={formData.licensePlate} onChange={e => handleInputChange('licensePlate', e.target.value)} required className="border-slate-300 focus:border-red-500 focus:ring-red-500" />
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="truckNumber" className="text-sm font-medium">Truck/Fleet Number</Label>
                          <Input id="truckNumber" placeholder="Optional" value={formData.truckNumber} onChange={e => handleInputChange('truckNumber', e.target.value)} className="border-slate-300 focus:border-red-500 focus:ring-red-500" />
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="company" className="flex items-center text-sm font-medium">
                            <User className="h-4 w-4 mr-2 text-slate-500" />
                            Company Name
                          </Label>
                          <Input id="company" placeholder="If visible" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} className="border-slate-300 focus:border-red-500 focus:ring-red-500" />
                        </div>
                      </div>
                    </div>

                    {/* Incident Details Section */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                        Incident Details
                      </h3>
                      
                      <div className="space-y-3">
                        <Label htmlFor="behaviorType" className="text-sm font-medium">Type of Dangerous Behavior *</Label>
                        <Select value={formData.behaviorType} onValueChange={value => handleInputChange('behaviorType', value)}>
                          <SelectTrigger className="border-slate-300 focus:border-red-500 focus:ring-red-500">
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

                      <div className="space-y-3">
                        <Label htmlFor="description" className="text-sm font-medium">
                          Detailed Description *
                        </Label>
                        <Textarea id="description" placeholder="Please describe what happened in detail. Include any relevant circumstances, weather conditions, traffic, etc." value={formData.description} onChange={e => handleInputChange('description', e.target.value)} required rows={5} className="border-slate-300 focus:border-red-500 focus:ring-red-500" />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="photo" className="flex items-center text-sm font-medium">
                          <Camera className="h-4 w-4 mr-2 text-slate-500" />
                          Photo Evidence (Optional)
                        </Label>
                        <Input id="photo" type="file" accept="image/*" onChange={handleFileChange} className="border-slate-300 focus:border-red-500 focus:ring-red-500" />
                        <p className="text-sm text-slate-500">
                          Upload a photo if you have visual evidence of the incident
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                        <FileText className="mr-2 h-5 w-5" />
                        Submit Report
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Safety Notice */}
              <Card className="bg-amber-50 border-amber-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 rounded-full p-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-2">Safety Notice</h3>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Only report incidents after ensuring your own safety. Never attempt to 
                        confront dangerous drivers directly. If you witness immediate danger, 
                        call 911 first, then file a report here later.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Report Tips */}
              <Card className="bg-blue-50 border-blue-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Reporting Tips</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Be as specific as possible with location details
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Include weather and traffic conditions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Photos help verify your report
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Report only what you directly witnessed
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Report;