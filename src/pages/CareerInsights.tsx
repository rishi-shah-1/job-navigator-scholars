
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Users, Building } from "lucide-react";

const salaryData = [
  { role: "Software Dev", entry: 65000, mid: 95000, senior: 130000 },
  { role: "Data Analyst", entry: 55000, mid: 80000, senior: 110000 },
  { role: "Marketing", entry: 45000, mid: 70000, senior: 100000 },
  { role: "Healthcare", entry: 50000, mid: 75000, senior: 105000 },
];

const growthData = [
  { year: "2024", growth: 15 },
  { year: "2025", growth: 22 },
  { year: "2026", growth: 30 },
  { year: "2027", growth: 35 },
];

const CareerInsights = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-[#003087] mb-6">Career Insights & Salary Estimates</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-[#003087]" />
              Salary Ranges by Role
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="entry" name="Entry Level" fill="#003087" />
                  <Bar dataKey="mid" name="Mid Level" fill="#0055d4" />
                  <Bar dataKey="senior" name="Senior Level" fill="#0066ff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#003087]" />
              Industry Growth Projections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="growth" name="Growth %" fill="#003087" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#003087]" />
              Top Skills in Demand
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Data Analysis</span>
                <span className="text-[#003087] font-semibold">92% demand</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Programming</span>
                <span className="text-[#003087] font-semibold">88% demand</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Digital Marketing</span>
                <span className="text-[#003087] font-semibold">85% demand</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-[#003087]" />
              Industry Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="p-2 bg-gray-50 rounded">
                <h4 className="font-semibold">Remote Work</h4>
                <p className="text-sm text-gray-600">65% of companies offer hybrid options</p>
              </li>
              <li className="p-2 bg-gray-50 rounded">
                <h4 className="font-semibold">Tech Integration</h4>
                <p className="text-sm text-gray-600">90% increase in AI-related roles</p>
              </li>
              <li className="p-2 bg-gray-50 rounded">
                <h4 className="font-semibold">Sustainability</h4>
                <p className="text-sm text-gray-600">40% growth in green jobs</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareerInsights;
