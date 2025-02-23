
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  description: string;
  requirements: string[];
  salary: string;
  localEmployer: boolean;
}

export interface Employer {
  id: number;
  name: string;
  industry: string;
  location: string;
  rating: number;
  totalReviews: number;
  employeeCount: string;
  description: string;
  opportunities: string[];
  alumniTestimonial: string;
}

export interface EducationalResource {
  title: string;
  provider: string;
  url: string;
  cost: string;
  category: string;
}

export interface LocalResource {
  title: string;
  url: string;
  type: string;
  description: string;
}
