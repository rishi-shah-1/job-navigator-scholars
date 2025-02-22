
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Clock, CheckCircle2, XCircle, HourglassIcon } from "lucide-react";

interface Application {
  id: string;
  company: string;
  position: string;
  status: 'pending' | 'interviewed' | 'accepted' | 'rejected';
  appliedDate: string;
}

const ApplicationTracker = () => {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: '1',
      company: 'Example Corp',
      position: 'Summer Intern',
      status: 'pending',
      appliedDate: '2024-03-15'
    }
  ]);

  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'interviewed':
        return <HourglassIcon className="h-5 w-5 text-blue-500" />;
      case 'accepted':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'interviewed':
        return 'bg-blue-100 text-blue-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="page-container py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-[#003087]">Application Tracker</CardTitle>
          <Button className="bg-[#003087]">
            <Plus className="h-4 w-4 mr-2" />
            Add Application
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(application.status)}
                  <div>
                    <h3 className="font-semibold">{application.position}</h3>
                    <p className="text-sm text-gray-600">{application.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">
                    Applied: {new Date(application.appliedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationTracker;
