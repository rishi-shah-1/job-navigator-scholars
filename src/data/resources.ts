import { EducationalResource, LocalResource } from './types/jobTypes';

export const educationalResources: EducationalResource[] = [
  {
    title: "Coursera - Web Development",
    provider: "Coursera",
    url: "https://www.coursera.org/learn/web-development",
    cost: "Free with student email",
    category: "Technology"
  },
  {
    title: "LinkedIn Learning - Business Skills",
    provider: "LinkedIn",
    url: "https://www.linkedin.com/learning",
    cost: "Free with library card",
    category: "Business"
  },
  {
    title: "Udemy - Digital Marketing",
    provider: "Udemy",
    url: "https://www.udemy.com/course/digital-marketing",
    cost: "Discounted for students",
    category: "Marketing"
  },
  {
    title: "Middlesex College - Dual Enrollment",
    provider: "Middlesex College",
    url: "https://www.middlesexcc.edu/early-college",
    cost: "Varies",
    category: "Higher Education"
  },
  {
    title: "Google Career Certificates",
    provider: "Google",
    url: "https://grow.google/certificates",
    cost: "Free for NJ residents",
    category: "Professional Certification"
  },
  {
    title: "Microsoft Learn",
    provider: "Microsoft",
    url: "https://learn.microsoft.com",
    cost: "Free",
    category: "Technology"
  }
];

export const localResources: LocalResource[] = [
  {
    title: "NJ Department of Labor - Youth Programs",
    url: "https://www.nj.gov/labor/career-services/youth",
    type: "Government",
    description: "State resources for young job seekers"
  },
  {
    title: "Middlesex County Workforce Development",
    url: "https://www.middlesexcountynj.gov/workforce",
    type: "County",
    description: "Local job training and placement services"
  },
  {
    title: "Sayreville Career Center",
    url: "https://www.sayrevillek12.net/careers",
    type: "Local",
    description: "School district career resources"
  },
  {
    title: "NJ Career Connections",
    url: "https://careerconnections.nj.gov",
    type: "Government",
    description: "State job search and career planning tools"
  },
  {
    title: "Sayreville Public Library Career Resources",
    url: "https://www.sayrevillelibrary.org/career",
    type: "Local",
    description: "Free career resources and workshops"
  },
  {
    title: "Middlesex County Business Resource Center",
    url: "https://www.middlesexcountynj.gov/business",
    type: "County",
    description: "Local business networking and opportunities"
  },
  {
    title: "NJ Youth Corps",
    url: "https://www.state.nj.us/labor/wioa/Youth/youth_index.html",
    type: "Government",
    description: "Youth employment and training programs"
  },
  {
    title: "Garden State Career Network",
    url: "https://jobs4jersey.com",
    type: "Government",
    description: "New Jersey's premier job search tool"
  }
];
