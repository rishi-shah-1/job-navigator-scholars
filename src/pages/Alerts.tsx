
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { toast } from "sonner";

interface AlertPreference {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

const Alerts = () => {
  const [alertPreferences, setAlertPreferences] = useState<AlertPreference[]>([
    {
      id: "job-alerts",
      title: "New Job Postings",
      description: "Get notified when new jobs matching your interests are posted",
      enabled: false
    },
    {
      id: "event-alerts",
      title: "Upcoming Events",
      description: "Receive reminders about workshops and career events",
      enabled: false
    },
    {
      id: "deadline-alerts",
      title: "Application Deadlines",
      description: "Get reminded about approaching application deadlines",
      enabled: false
    },
    {
      id: "course-alerts",
      title: "New Courses",
      description: "Be notified when new online courses become available",
      enabled: false
    }
  ]);

  const toggleAlert = (id: string) => {
    setAlertPreferences(prev =>
      prev.map(pref => {
        if (pref.id === id) {
          const newEnabled = !pref.enabled;
          if (newEnabled) {
            toast.success(`${pref.title} alerts enabled`);
          } else {
            toast.info(`${pref.title} alerts disabled`);
          }
          return { ...pref, enabled: newEnabled };
        }
        return pref;
      })
    );
  };

  const enableAllAlerts = () => {
    setAlertPreferences(prev =>
      prev.map(pref => ({ ...pref, enabled: true }))
    );
    toast.success("All alerts enabled");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#003087]">Instant Alerts</h1>
          <Button 
            onClick={enableAllAlerts}
            className="bg-[#003087] hover:bg-[#002065]"
          >
            <Bell className="h-4 w-4 mr-2" />
            Enable All
          </Button>
        </div>
        
        <p className="text-gray-600 mb-8">
          Customize your notification preferences to stay updated on opportunities that matter to you.
        </p>

        <div className="space-y-4">
          {alertPreferences.map((pref) => (
            <Card key={pref.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{pref.title}</h3>
                    <p className="text-gray-600 text-sm">{pref.description}</p>
                  </div>
                  <Switch
                    checked={pref.enabled}
                    onCheckedChange={() => toggleAlert(pref.id)}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
