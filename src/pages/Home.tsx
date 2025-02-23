
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink, Calendar, BookOpen, Briefcase } from "lucide-react";

const onlineCourses = [
  {
    platform: "Coursera",
    description: "Access free courses through your school account",
    link: "https://www.coursera.org/campus/high-school",
  },
  {
    platform: "LinkedIn Learning",
    description: "Professional development and software training",
    link: "https://www.linkedin.com/learning",
  },
  {
    platform: "Udemy",
    description: "Career-focused online courses",
    link: "https://www.udemy.com",
  }
];

const upcomingEvents = [
  {
    title: "College Application Workshop",
    date: "March 15, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Virtual",
    registration: "https://sayrevillek12.net/guidance"
  },
  {
    title: "Career Exploration Day",
    date: "March 22, 2024",
    time: "1:00 PM - 3:00 PM",
    location: "Virtual",
    registration: "https://sayrevillek12.net/guidance"
  },
  {
    title: "Resume Building Workshop",
    date: "March 29, 2024",
    time: "2:30 PM - 4:00 PM",
    location: "Virtual",
    registration: "https://sayrevillek12.net/guidance"
  }
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#003087] mb-8 text-center">
          Welcome to SWMHS Career Center
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Online Courses Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#003087]" />
                Online Courses & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {onlineCourses.map((course, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{course.platform}</h3>
                    <p className="text-gray-600 mb-3">{course.description}</p>
                    <a 
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#003087] hover:underline gap-1"
                    >
                      Access Platform <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#003087]" />
                Guidance Department Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                    <div className="text-gray-600 space-y-1 mb-3">
                      <p>📅 {event.date}</p>
                      <p>⏰ {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                    <a 
                      href={event.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#003087] hover:underline gap-1"
                    >
                      Register Now <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/jobs">
            <Button className="w-full h-20 text-lg" variant="outline">
              <Briefcase className="mr-2 h-5 w-5" />
              Browse Job Listings
            </Button>
          </Link>
          <Link to="/resume-builder">
            <Button className="w-full h-20 text-lg" variant="outline">
              <BookOpen className="mr-2 h-5 w-5" />
              Build Your Resume
            </Button>
          </Link>
          <Link to="/employers">
            <Button className="w-full h-20 text-lg" variant="outline">
              <Calendar className="mr-2 h-5 w-5" />
              View Employer Profiles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
