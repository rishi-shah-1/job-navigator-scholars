
import { Job } from '../types/jobTypes';

export const partTimeJobs: Job[] = [
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
  // ... Add other part-time jobs
];
