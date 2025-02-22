
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, MapPin, Building2, Users, Search } from "lucide-react";

interface Employer {
  id: number;
  name: string;
  industry: string;
  location: string;
  rating: number;
  totalReviews: number;
  employeeCount: string;
  description: string;
  opportunities: string[];
}

const mockEmployers: Employer[] = [
  {
    id: 1,
    name: "Tech Solutions Inc",
    industry: "Technology",
    location: "Sayreville, NJ",
    rating: 4.5,
    totalReviews: 28,
    employeeCount: "50-200",
    description: "Leading technology solutions provider offering internships and entry-level positions for SWMHS students.",
    opportunities: ["Software Development Intern", "IT Support", "Digital Marketing"]
  },
  {
    id: 2,
    name: "Local Healthcare Center",
    industry: "Healthcare",
    location: "Parlin, NJ",
    rating: 4.8,
    totalReviews: 45,
    employeeCount: "200-500",
    description: "Premier healthcare facility providing hands-on experience in medical administration and patient care.",
    opportunities: ["Medical Assistant Intern", "Administrative Support", "Data Entry"]
  }
];

const EmployerProfiles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredEmployers = mockEmployers.filter(employer =>
    employer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employer.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="page-container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#003087] mb-4">Trusted Employers</h1>
          <p className="text-gray-600 mb-6">
            Explore companies that have partnered with Sayreville War Memorial High School
            to provide opportunities for our students.
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              className="pl-10"
              placeholder="Search employers by name or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredEmployers.map((employer) => (
            <Card key={employer.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{employer.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building2 className="h-4 w-4" />
                      {employer.industry}
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4" />
                      {employer.location}
                      <span className="mx-2">•</span>
                      <Users className="h-4 w-4" />
                      {employer.employeeCount} employees
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {renderStars(employer.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {employer.totalReviews} student reviews
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{employer.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Current Opportunities:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {employer.opportunities.map((opp, index) => (
                      <li key={index}>{opp}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployerProfiles;
