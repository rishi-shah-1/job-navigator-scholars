import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Clock, CheckCircle2, XCircle, HourglassIcon, Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Application {
  id: string;
  company: string;
  position: string;
  status: 'pending' | 'interviewed' | 'accepted' | 'rejected';
  appliedDate: string;
}

const ApplicationTracker = () => {
  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem('applications');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure the status is one of the allowed values
      return parsed.map((app: any) => ({
        ...app,
        status: app.status as Application['status']
      }));
    }
    return [{
      id: '1',
      company: 'Example Corp',
      position: 'Summer Intern',
      status: 'pending' as const,
      appliedDate: '2024-03-15'
    }];
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingApplication, setEditingApplication] = useState<Application | null>(null);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    status: 'pending',
    appliedDate: new Date().toISOString().split('T')[0]
  });

  const saveToLocalStorage = (apps: Application[]) => {
    localStorage.setItem('applications', JSON.stringify(apps));
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingApplication) {
      const updatedApplications = applications.map(app => 
        app.id === editingApplication.id ? { ...formData, id: app.id } : app
      );
      setApplications(updatedApplications);
      saveToLocalStorage(updatedApplications);
      toast.success("Application updated successfully!");
    } else {
      const newApplication = {
        ...formData,
        id: Date.now().toString()
      };
      const newApplications = [...applications, newApplication];
      setApplications(newApplications);
      saveToLocalStorage(newApplications);
      toast.success("Application added successfully!");
    }
    
    setIsDialogOpen(false);
    setEditingApplication(null);
    setFormData({
      company: '',
      position: '',
      status: 'pending',
      appliedDate: new Date().toISOString().split('T')[0]
    });
  };

  const handleEdit = (application: Application) => {
    setEditingApplication(application);
    setFormData({
      company: application.company,
      position: application.position,
      status: application.status,
      appliedDate: application.appliedDate
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    const updatedApplications = applications.filter(app => app.id !== id);
    setApplications(updatedApplications);
    saveToLocalStorage(updatedApplications);
    toast.success("Application removed successfully!");
  };

  const addApplication = () => {
    setEditingApplication(null);
    setFormData({
      company: '',
      position: '',
      status: 'pending',
      appliedDate: new Date().toISOString().split('T')[0]
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="page-container py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-[#003087]">Application Tracker</CardTitle>
          <Button onClick={addApplication} className="bg-[#003087]">
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
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(application)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(application.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
            {applications.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No applications yet. Click "Add Application" to get started!
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingApplication ? 'Edit Application' : 'Add New Application'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: Application['status']) => 
                    setFormData(prev => ({ ...prev, status: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="interviewed">Interviewed</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="appliedDate">Application Date</Label>
                <Input
                  id="appliedDate"
                  type="date"
                  value={formData.appliedDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, appliedDate: e.target.value }))}
                  required
                />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="submit" className="bg-[#003087]">
                {editingApplication ? 'Update' : 'Add'} Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationTracker;
