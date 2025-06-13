import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, MessageSquare, Clock, AlertTriangle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactReason: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll get back to you within 24 hours."
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      contactReason: ''
    });
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-background">
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
            <Link to="/stats" className="hover:text-blue-400 transition-colors">Stats</Link>
            <Link to="/contact" className="text-blue-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-12 w-12 mr-3" />
            <h2 className="text-4xl font-bold">Contact Us</h2>
          </div>
          <p className="text-xl text-purple-100">
            Get in touch with our team for support, partnerships, or questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-rose-950">
                  <CardTitle className="flex items-center text-slate-50">
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-slate-50">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-red-600" />
                      <div>
                        <div className="font-semibold">1-800-TRUCK-SAFE</div>
                        <div className="text-sm text-slate-600">24/7 Emergency Reports</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">emergency@trucktruth.com</div>
                        <div className="text-sm text-slate-600">Urgent incident reports</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-emerald-800">
                  <CardTitle className="flex items-center text-slate-50">
                    <Users className="h-5 w-5 mr-2" />
                    General Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-emerald-50">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">(555) 123-SAFE</div>
                        <div className="text-sm text-slate-600">Mon-Fri 8AM-6PM EST</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">support@trucktruth.com</div>
                        <div className="text-sm text-slate-600">General questions & support</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-semibold">Response Time</div>
                        <div className="text-sm text-slate-600">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-blue-600">
                  <CardTitle className="flex items-center text-slate-50">
                    <MapPin className="h-5 w-5 mr-2" />
                    Business Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-sky-50">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold">partnerships@trucktruth.com</div>
                        <div className="text-sm text-slate-600">Fleet partnerships & integrations</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold">Fleet Solutions</div>
                        <div className="text-sm text-slate-600">Custom safety programs</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg bg-yellow-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Send Us a Message</CardTitle>
                  <p className="text-slate-600">
                    Have a question, suggestion, or need support? We're here to help.
                  </p>
                </CardHeader>
                <CardContent className="bg-stone-100">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Your full name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} required className="bg-slate-50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required className="bg-slate-50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactReason">Reason for Contact</Label>
                      <Select value={formData.contactReason} onValueChange={value => handleInputChange('contactReason', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="report-issue">Report Platform Issue</SelectItem>
                          <SelectItem value="partnership">Business Partnership</SelectItem>
                          <SelectItem value="fleet">Fleet Integration</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                          <SelectItem value="legal">Legal Question</SelectItem>
                          <SelectItem value="feedback">Feedback/Suggestion</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Brief description of your inquiry" value={formData.subject} onChange={e => handleInputChange('subject', e.target.value)} required className="bg-slate-50" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Please provide details about your inquiry..." value={formData.message} onChange={e => handleInputChange('message', e.target.value)} required rows={6} className="bg-slate-50" />
                    </div>

                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Important Notice */}
          <Card className="mt-8 bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Emergency Situations</h3>
                  <p className="text-red-700 mb-2">
                    If you are witnessing immediate danger or criminal activity involving commercial vehicles, 
                    call 911 immediately. Do not wait to file a report on our platform.
                  </p>
                  <p className="text-red-700">
                    For urgent safety reports that are not immediate emergencies, call our 24/7 hotline 
                    at <strong>1-800-TRUCK-SAFE</strong>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mt-8 shadow-lg">
            <CardHeader className="bg-indigo-950">
              <CardTitle className="text-slate-50">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="bg-blue-200">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-zinc-950">How quickly are reports processed?</h4>
                  <p className="text-lime-700">
                    Emergency reports are processed immediately. Standard reports are reviewed within 2-4 hours 
                    during business hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-950">Can trucking companies access driver data?</h4>
                  <p className="text-green-700">
                    Yes, we offer fleet management partnerships that allow companies to monitor their drivers' 
                    safety records to improve training and accountability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-950">Is my personal information protected?</h4>
                  <p className="text-lime-800">
                    Absolutely. We use enterprise-grade security and only share necessary information with 
                    relevant authorities when required by law.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Contact;