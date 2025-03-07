
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "College Application Workshop",
    date: "March 15, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Virtual",
    description: "Learn how to craft compelling college applications and essays.",
    registration: "https://sayrevillek12.net/guidance"
  },
  {
    title: "Career Exploration Day",
    date: "March 22, 2024",
    time: "1:00 PM - 3:00 PM",
    location: "Virtual",
    description: "Explore different career paths with industry professionals.",
    registration: "https://sayrevillek12.net/guidance"
  },
  {
    title: "Resume Building Workshop",
    date: "March 29, 2024",
    time: "2:30 PM - 4:00 PM",
    location: "Virtual",
    description: "Create a standout resume with guidance from career counselors.",
    registration: "https://sayrevillek12.net/guidance"
  }
];

const GuidanceEvents = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-navy mb-6">Guidance Department Events</h1>
      <p className="text-gray-600 mb-8">
        Join our virtual workshops and events to enhance your career development journey.
      </p>

      <div className="grid gap-6">
        {events.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <a href={event.registration} target="_blank" rel="noopener noreferrer">
                <Button className="bg-navy hover:bg-navy-800">
                  Register Now
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GuidanceEvents;
