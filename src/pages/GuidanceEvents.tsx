
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    title: "College Application Workshop",
    date: "March 15, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Virtual",
    description: "Learn how to craft compelling college applications and essays.",
    capacity: 50,
    spots_left: 32
  },
  {
    title: "Career Exploration Day",
    date: "March 22, 2024",
    time: "1:00 PM - 3:00 PM",
    location: "Auditorium, Main Building",
    description: "Explore different career paths with industry professionals.",
    capacity: 100,
    spots_left: 45
  },
  {
    title: "Resume Building Workshop",
    date: "March 29, 2024",
    time: "2:30 PM - 4:00 PM",
    location: "Virtual",
    description: "Create a standout resume with guidance from career counselors.",
    capacity: 50,
    spots_left: 28
  },
  {
    title: "College Fair",
    date: "April 5, 2024",
    time: "12:00 PM - 3:00 PM",
    location: "Gymnasium",
    description: "Meet representatives from over 50 colleges and universities.",
    capacity: 200,
    spots_left: 134
  },
  {
    title: "Scholarship Information Session",
    date: "April 12, 2024",
    time: "4:00 PM - 5:30 PM",
    location: "Virtual",
    description: "Learn about available scholarships and how to apply for them.",
    capacity: 75,
    spots_left: 52
  },
  {
    title: "Mock Interview Day",
    date: "April 19, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Guidance Office",
    description: "Practice your interview skills with real employers.",
    capacity: 40,
    spots_left: 15
  }
];

const GuidanceEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    questions: ""
  });
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the registration to a backend
    console.log("Registration submitted:", { event: selectedEvent, attendee: formData });
    
    // Close dialog and show success message
    setIsDialogOpen(false);
    toast({
      title: "Registration Successful",
      description: `You've been registered for ${selectedEvent.title}. Check your email for confirmation.`,
      duration: 5000
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      grade: "",
      questions: ""
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-navy mb-6">{t("Guidance Department Events")}</h1>
      <p className="text-gray-600 mb-8">
        {t("Join our workshops and events to enhance your career development journey.")}
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <Card key={index} className="h-full flex flex-col hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">{t(event.title)}</CardTitle>
              <CardDescription className="text-sm mt-2">{t(event.description)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{t(event.location)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{t("Spots left")}: {event.spots_left} / {event.capacity}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-navy hover:bg-navy-800 text-sm md:text-base py-2" 
                onClick={() => handleRegister(event)}
              >
                {t("Register Now")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Registration Dialog - Made more mobile-friendly */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] max-w-[95vw] p-4 sm:p-6 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">{t("Register for")} {selectedEvent?.title}</DialogTitle>
            <DialogDescription className="text-sm">
              {t("Fill out the form below to register for this event.")}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("Full Name")}</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">{t("Email")}</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">{t("Phone Number")}</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="grade">{t("Grade Level")}</Label>
              <Select 
                name="grade"
                onValueChange={(value) => setFormData({...formData, grade: value})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("Select grade")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">{t("9th Grade")}</SelectItem>
                  <SelectItem value="10">{t("10th Grade")}</SelectItem>
                  <SelectItem value="11">{t("11th Grade")}</SelectItem>
                  <SelectItem value="12">{t("12th Grade")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="questions">{t("Questions or Comments")}</Label>
              <Textarea 
                id="questions" 
                name="questions"
                value={formData.questions}
                onChange={handleInputChange}
                placeholder={t("Any specific questions for the presenters?")}
                className="h-24 w-full"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-6">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="w-full sm:w-auto">
                {t("Cancel")}
              </Button>
              <Button type="submit" className="bg-navy hover:bg-navy-800 w-full sm:w-auto">
                {t("Confirm Registration")}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GuidanceEvents;
