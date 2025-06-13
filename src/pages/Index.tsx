import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Search, BarChart3, Phone, MapPin, Clock, FileText, Settings, CheckCircle, Star, Users, Building, Truck, UserCheck, Lock, Award, TrendingUp, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white text-slate-800 py-4 px-6 shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="font-bold text-slate-800 text-2xl">TruckWatch
          </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/report" className="hover:text-blue-600 transition-colors">Report</Link>
            <Link to="/search" className="hover:text-blue-600 transition-colors">Search</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/admin-login" className="hover:text-blue-600 transition-colors flex items-center">
              <Settings className="h-4 w-4 mr-1" />
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Trusted by Industry Leaders */}
      

      {/* Security Certifications */}
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Reduce Hiring Risk with <span className="text-orange-400">Verified</span> Driver History
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              The first centralized platform enabling trucking companies to share and access verified professional 
              conduct records, promoting transparency and accountability industry-wide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/report">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                  <FileText className="mr-2 h-5 w-5" />
                  Report a Driver
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Reports
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Industry Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">50+</div>
                <div className="text-blue-100">Target Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">85%</div>
                <div className="text-blue-100">Risk Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-blue-100">Platform Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-1">100%</div>
                <div className="text-blue-100">FCRA Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Driver Reputation Registry */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Why Driver Reputation Registry?</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Traditional background checks miss critical professional conduct issues. Our platform 
              fills this gap with verified, industry-specific reporting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* The Problem */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">The Problem</h4>
                <p className="text-slate-600 mb-6">
                  Companies lack visibility into drivers' professional conduct history, leading to 
                  expensive hiring mistakes and operational risks.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-red-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Employment abandonment
                  </div>
                  <div className="flex items-center text-red-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Safety violations
                  </div>
                  <div className="flex items-center text-red-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Professional misconduct
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">Our Solution</h4>
                <p className="text-slate-600 mb-6">
                  A centralized, verified database of professional conduct records that promotes 
                  transparency and accountability.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Verified reporting
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Admin moderation
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Driver dispute process
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Results */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">The Results</h4>
                <p className="text-slate-600 mb-6">
                  Reduced hiring risks, improved fleet safety, and enhanced operational efficiency through 
                  informed decision-making.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Lower turnover costs
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Improved safety records
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Better hiring decisions
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">How It Works</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our 4-step process ensures accurate, verified, and fair reporting of professional conduct incidents.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800">Report Incident</h4>
                </div>
                <p className="text-slate-600 mb-6 text-lg">
                  Trucking companies submit detailed incident reports through our secure platform, 
                  categorizing by employment defaults, safety violations, theft, or professional misconduct.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-4">Incident Categories:</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-orange-600">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Employment Defaults
                    </div>
                    <div className="flex items-center text-red-600">
                      <Shield className="w-4 h-4 mr-2" />
                      Safety Violations
                    </div>
                    <div className="flex items-center text-purple-600">
                      <Lock className="w-4 h-4 mr-2" />
                      Theft/Criminal
                    </div>
                    <div className="flex items-center text-yellow-600">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Misconduct
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 h-80 flex items-center justify-center">
                <FileText className="h-32 w-32 text-blue-600" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-8 h-80 flex items-center justify-center order-2 md:order-1">
                <UserCheck className="h-32 w-32 text-orange-600" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800">Verify & Moderate</h4>
                </div>
                <p className="text-slate-600 mb-6 text-lg">
                  Our admin team reviews each submission for accuracy and fairness. 
                  Drivers are notified and can dispute through our formal appeals process.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-4">Verification Process:</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-3" />
                      Admin review & validation
                    </div>
                    <div className="flex items-center text-blue-600">
                      <AlertTriangle className="w-4 h-4 mr-3" />
                      Driver notification system
                    </div>
                    <div className="flex items-center text-purple-600">
                      <FileText className="w-4 h-4 mr-3" />
                      Dispute resolution workflow
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    3
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800">Search & Access</h4>
                </div>
                <p className="text-slate-600 mb-6 text-lg">
                  Authorized companies can securely search driver records by CDL number or name, 
                  accessing comprehensive verified history reports.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-4">Search Process:</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-blue-600">
                      <Search className="w-4 h-4 mr-3" />
                      CDL number lookup
                    </div>
                    <div className="flex items-center text-green-600">
                      <Users className="w-4 h-4 mr-3" />
                      Driver name search
                    </div>
                    <div className="flex items-center text-purple-600">
                      <Lock className="w-4 h-4 mr-3" />
                      Multi-factor authentication
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 h-80 flex items-center justify-center">
                <Search className="h-32 w-32 text-green-600" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-8 h-80 flex items-center justify-center order-2 md:order-1">
                <TrendingUp className="h-32 w-32 text-purple-600" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    4
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800">Make Informed Decisions</h4>
                </div>
                <p className="text-slate-600 mb-6 text-lg">
                  Armed with verified professional conduct data, companies can make confident hiring 
                  decisions that reduce risk and improve fleet safety.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-4">Decision Benefits:</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-3" />
                      Reduced hiring risks
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-3" />
                      Lower operational costs
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-3" />
                      Improved fleet safety
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Platform Features</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive toolset designed specifically for the trucking industry's unique hiring challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Driver Profile Management */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Driver Profile Management</h4>
                <p className="text-slate-600 mb-6">
                  Comprehensive driver profiles with CDL information, employment history, and contact details.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Full name & DOB tracking
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    CDL number & state issuance
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Employment history records
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Optional contact information
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Incident Reporting */}
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Incident Reporting</h4>
                <p className="text-slate-600 mb-6">
                  Structured reporting system with evidence upload and categorization for accurate documentation.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Categorized incident types
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Supporting evidence upload
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Date & description tracking
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mandatory field validation
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Verification Workflow */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Verification Workflow</h4>
                <p className="text-slate-600 mb-6">
                  Rigorous admin moderation ensures accuracy and fairness in all reported incidents.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Admin review process
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Driver notification system
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Dispute resolution
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Appeals workflow
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secure Search & Reports */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Secure Search & Reports</h4>
                <p className="text-slate-600 mb-6">
                  Advanced search capabilities with comprehensive reporting for informed decision-making.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    CDL number lookup
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Driver name search
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Verified history reports
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Secure access controls
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Role-Based Access */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Role-Based Access</h4>
                <p className="text-slate-600 mb-6">
                  Sophisticated access management with multi-factor authentication and role-based permissions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    OAuth authentication
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Multi-factor authentication
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Admin/Company/Driver roles
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Permission controls
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Monitoring */}
            <Card className="bg-indigo-50 border-indigo-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Compliance Monitoring</h4>
                <p className="text-slate-600 mb-6">
                  Built-in compliance tools ensuring adherence to FCRA, DOT, and privacy regulations.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    FCRA compliance
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    DOT regulations
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    GDPR ready
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Audit trail logging
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built for Industry Professionals */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Built for Industry Professionals</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Designed specifically for the unique needs of trucking industry stakeholders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Trucking Companies */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center bg-blue-200">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Trucking Companies</h4>
                <p className="text-slate-600 mb-6">
                  Access verified driver histories to make informed hiring decisions and reduce operational risks.
                </p>
                <div className="text-sm space-y-2">
                  <div className="text-slate-600">• Risk assessment tools</div>
                  <div className="text-slate-600">• Hiring decision support</div>
                  <div className="text-slate-600">• Fleet safety improvement</div>
                </div>
              </CardContent>
            </Card>

            {/* Fleet Managers */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-orange-200">
              <CardContent className="p-8 text-center bg-orange-200">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Fleet Managers</h4>
                <p className="text-slate-600 mb-6">
                  Streamline driver vetting processes and maintain comprehensive records for fleet operations.
                </p>
                <div className="text-sm space-y-2">
                  <div className="text-slate-600">• Driver performance tracking</div>
                  <div className="text-slate-600">• Fleet safety monitoring</div>
                  <div className="text-slate-600">• Operational efficiency</div>
                </div>
              </CardContent>
            </Card>

            {/* HR Personnel */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-lime-200">
              <CardContent className="p-8 text-center bg-lime-200">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">HR Personnel</h4>
                <p className="text-slate-600 mb-6">
                  Enhance recruitment processes with comprehensive background verification and compliance tools.
                </p>
                <div className="text-sm space-y-2">
                  <div className="text-slate-600">• Streamlined hiring</div>
                  <div className="text-slate-600">• Compliance management</div>
                  <div className="text-slate-600">• Risk mitigation</div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Drivers */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center bg-violet-200">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Professional Drivers</h4>
                <p className="text-slate-600 mb-6">
                  Access your professional records, dispute inaccuracies, and maintain transparency in your career.
                </p>
                <div className="text-sm space-y-2">
                  <div className="text-slate-600">• Record transparency</div>
                  <div className="text-slate-600">• Dispute resolution</div>
                  <div className="text-slate-600">• Career protection</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Security */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Enterprise-Grade Security & Compliance</h3>
              <p className="text-xl text-slate-300 mb-8">
                Built with the highest security standards and full regulatory compliance to protect 
                sensitive driver data and ensure legal adherence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-600 p-4 rounded-lg text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold">FCRA</div>
                  <div className="text-sm text-blue-100">Compliant</div>
                </div>
                <div className="bg-orange-500 p-4 rounded-lg text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold">DOT</div>
                  <div className="text-sm text-orange-100">Regulations</div>
                </div>
                <div className="bg-green-600 p-4 rounded-lg text-center">
                  <Lock className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold">GDPR</div>
                  <div className="text-sm text-green-100">Ready</div>
                </div>
                <div className="bg-purple-600 p-4 rounded-lg text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold">SOC 2</div>
                  <div className="text-sm text-purple-100">Type II</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>End-to-end data encryption at rest and in transit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Comprehensive audit trails and activity logging</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Regular security assessments and penetration testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Automated backups with disaster recovery</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-6">Security Features</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Lock className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <div className="font-semibold">256-bit Encryption</div>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <div className="font-semibold">Multi-factor Auth</div>
                </div>
                <div className="text-center">
                  <UserCheck className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                  <div className="font-semibold">Role-Based Access</div>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <div className="font-semibold">24/7 Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Transform Your Hiring Process Today
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Join the leading trucking companies using verified driver history to make smarter, 
            safer hiring decisions and reduce operational risks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                Start Reporting
              </Button>
            </Link>
            <Link to="/search">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold">
                Search Drivers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">Driver Reputation Registry</span>
            </div>
            <p className="text-slate-400">
              Making trucking safer through verified professional conduct tracking and transparency.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/report" className="block text-slate-400 hover:text-white transition-colors">Report Driver</Link>
              <Link to="/search" className="block text-slate-400 hover:text-white transition-colors">Search Records</Link>
              <Link to="/admin-login" className="block text-slate-400 hover:text-white transition-colors">Admin Access</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-slate-400 hover:text-white transition-colors">Contact Us</Link>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-DRIVER-REG</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Driver Reputation Registry. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;