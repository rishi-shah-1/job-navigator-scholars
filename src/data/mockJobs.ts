
export const mockJobs = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Tech Solutions NJ",
    location: "Sayreville, NJ",
    type: "Internship",
    posted: "2 days ago",
    description: "Learn and work with our development team on real projects. Great opportunity for SWMHS students interested in technology!",
    requirements: ["JavaScript/TypeScript", "React", "Team player", "SWMHS Student"],
    salary: "$20/hour",
    localEmployer: true
  },
  {
    id: 2,
    title: "Healthcare Administrative Assistant",
    company: "Saint Peter's Hospital",
    location: "New Brunswick, NJ",
    type: "Part-time",
    posted: "1 day ago",
    description: "Support healthcare administration team. Perfect for students interested in healthcare management.",
    requirements: ["MS Office", "Communication skills", "Detail-oriented", "Flexible schedule"],
    salary: "$18/hour",
    localEmployer: true
  },
  {
    id: 3,
    title: "STEM Education Scholarship",
    company: "Rutgers University",
    location: "New Brunswick, NJ",
    type: "Scholarship",
    posted: "3 days ago",
    description: "$5000 scholarship for STEM students from Middlesex County. Priority given to Sayreville residents.",
    requirements: ["3.5+ GPA", "STEM major intent", "NJ resident", "Sayreville resident preferred"],
    salary: "$5000 award",
    localEmployer: true
  },
  {
    id: 4,
    title: "Marketing Intern",
    company: "Johnson & Johnson",
    location: "New Brunswick, NJ",
    type: "Internship",
    posted: "5 days ago",
    description: "Join our digital marketing team. Learn from industry leaders in healthcare marketing.",
    requirements: ["Marketing interest", "Social media skills", "Creative mindset", "Local student"],
    salary: "$22/hour",
    localEmployer: true
  },
  {
    id: 5,
    title: "Retail Associate",
    company: "Sayreville Mall",
    location: "Sayreville, NJ",
    type: "Part-time",
    posted: "1 day ago",
    description: "Flexible hours perfect for high school students. No experience required.",
    requirements: ["Customer service", "Weekend availability", "SWMHS Student welcome"],
    salary: "$15/hour",
    localEmployer: true
  },
  {
    id: 6,
    title: "Library Page",
    company: "Sayreville Public Library",
    location: "Sayreville, NJ",
    type: "Part-time",
    posted: "3 days ago",
    description: "Help maintain library organization and assist patrons. Perfect for students!",
    requirements: ["Organization skills", "Customer service", "After school availability"],
    salary: "$14/hour",
    localEmployer: true
  }
];

export const mockEmployers = [
  {
    id: 1,
    name: "Tech Solutions NJ",
    industry: "Technology",
    location: "Sayreville, NJ",
    rating: 4.5,
    totalReviews: 28,
    employeeCount: "50-200",
    description: "Leading technology solutions provider offering internships and entry-level positions for SWMHS students.",
    opportunities: ["Software Development Intern", "IT Support", "Digital Marketing"],
    alumniTestimonial: "Great first internship experience - Sarah C., SWMHS '22"
  },
  {
    id: 2,
    name: "Saint Peter's Hospital",
    industry: "Healthcare",
    location: "New Brunswick, NJ",
    rating: 4.8,
    totalReviews: 45,
    employeeCount: "1000+",
    description: "Premier healthcare facility providing hands-on experience in medical administration and patient care.",
    opportunities: ["Administrative Assistant", "Patient Care Tech", "IT Support"],
    alumniTestimonial: "Learned so much about healthcare - Mike R., SWMHS '21"
  },
  {
    id: 3,
    name: "Johnson & Johnson",
    industry: "Healthcare & Technology",
    location: "New Brunswick, NJ",
    rating: 4.9,
    totalReviews: 156,
    employeeCount: "5000+",
    description: "Global healthcare leader offering diverse opportunities for students.",
    opportunities: ["Marketing Intern", "Research Assistant", "Data Analysis"],
    alumniTestimonial: "Amazing learning environment - David P., SWMHS '20"
  },
  {
    id: 4,
    name: "Rutgers University",
    industry: "Education",
    location: "New Brunswick, NJ",
    rating: 4.7,
    totalReviews: 89,
    employeeCount: "1000+",
    description: "Leading educational institution offering scholarships and research opportunities.",
    opportunities: ["Research Assistant", "Campus Ambassador", "Administrative"],
    alumniTestimonial: "Great stepping stone - Jennifer L., SWMHS '21"
  }
];

// Add educational resources
export const educationalResources = [
  {
    title: "Coursera - Web Development",
    provider: "Coursera",
    url: "https://www.coursera.org/learn/web-development",
    cost: "Free with student email"
  },
  {
    title: "LinkedIn Learning - Business Skills",
    provider: "LinkedIn",
    url: "https://www.linkedin.com/learning",
    cost: "Free with library card"
  },
  {
    title: "Udemy - Digital Marketing",
    provider: "Udemy",
    url: "https://www.udemy.com/course/digital-marketing",
    cost: "Discounted for students"
  }
];

// Add local career resources
export const localResources = [
  {
    title: "NJ Department of Labor - Youth Programs",
    url: "https://www.nj.gov/labor/career-services/youth",
    type: "Government"
  },
  {
    title: "Middlesex County Workforce Development",
    url: "https://www.middlesexcountynj.gov/workforce",
    type: "County"
  },
  {
    title: "Sayreville Career Center",
    url: "https://www.sayrevillek12.net/careers",
    type: "Local"
  }
];
