
import { Building2, Phone, Mail, Globe, FileText, Calendar, Bell, BookOpen, Code, Lock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#003087] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-6 w-6" />
              <h3 className="font-semibold text-lg">Contact Us</h3>
            </div>
            <address className="not-italic space-y-2">
              <p>Sayreville War Memorial High School</p>
              <p>820 Washington Road</p>
              <p>Parlin, NJ 08859</p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:732-525-5252">732-525-5252</a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="hover:text-gray-300">Calendars</Link>
              </li>
              <li>
                <Link to="/alerts" className="hover:text-gray-300">Facilities Notifications</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-gray-300">Academic Programs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { text: "HIB Resources", url: "https://www.sayrevillek12.net/departments/hib-resources" },
                { text: "Budget", url: "https://www.sayrevillek12.net/departments/business-office/budget" },
                { text: "Free and Reduced Meal Application", url: "https://www.sayrevillek12.net/departments/food-services" },
                { text: "School Performance Reports", url: "https://www.sayrevillek12.net/departments/curriculum/school-performance-reports" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Developer Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sources" className="hover:text-gray-300 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Technologies & Sources
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-gray-300 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Admin Dashboard
                </Link>
              </li>
              {[
                { text: "LinkedIn Learning", url: "https://www.linkedin.com/learning" },
                { text: "Coursera Certifications", url: "https://www.coursera.org/professional-certificates" },
                { text: "Google Career Certificates", url: "https://grow.google/certificates" },
                { text: "Microsoft Learn", url: "https://learn.microsoft.com/certifications" },
                { text: "AWS Training", url: "https://aws.amazon.com/training" },
                { text: "Udacity Nanodegrees", url: "https://www.udacity.com" },
                { text: "edX Programs", url: "https://www.edx.org/professional-certificate" },
                { text: "Codecademy Pro", url: "https://www.codecademy.com/pro" },
                { text: "Sayreville Schools Live Stream", url: "https://www.sayrevillek12.net/live-stream" },
                { text: "BOE Live Stream", url: "https://www.sayrevillek12.net/board-of-education/live-stream" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sayreville War Memorial High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
