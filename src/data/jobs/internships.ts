
import { Job } from '../types/jobTypes';

export const internshipJobs: Job[] = [
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
  // ... Add other internship jobs
];
