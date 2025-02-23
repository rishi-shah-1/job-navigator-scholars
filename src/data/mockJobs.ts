
import { Job } from './types/jobTypes';
import { internshipJobs } from './jobs/internships';
import { partTimeJobs } from './jobs/partTime';
import { scholarshipJobs } from './jobs/scholarships';

export const mockJobs: Job[] = [
  ...internshipJobs,
  ...partTimeJobs,
  ...scholarshipJobs
];

export * from './employers';
export * from './resources';
