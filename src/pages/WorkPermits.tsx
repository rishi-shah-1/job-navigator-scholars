
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

const WorkPermits = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-[#003087] mb-6">Work Permits & Legal Guidance</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#003087]" />
              Work Permit Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="age">
                <AccordionTrigger>Age Requirements</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>14-15 years: Max 3 hours on school days, 18 hours per week</li>
                    <li>16-17 years: Max 8 hours per day, 40 hours per week</li>
                    <li>Work permit required for all minors under 18</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="documents">
                <AccordionTrigger>Required Documents</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Birth Certificate or Valid ID</li>
                    <li>School Record</li>
                    <li>Parent/Guardian Consent Form</li>
                    <li>Promise of Employment</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="process">
                <AccordionTrigger>Application Process</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-4 space-y-2">
                    <li>Obtain employment offer</li>
                    <li>Complete application form</li>
                    <li>Get parent/guardian signature</li>
                    <li>Submit to school guidance office</li>
                    <li>Receive permit within 3 business days</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[#003087]" />
              Important Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-2 p-3 bg-yellow-50 rounded">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Working Hours</h4>
                  <p className="text-sm text-yellow-700">Cannot work during school hours or past 7 PM on school nights</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-800">Permitted Jobs</h4>
                  <p className="text-sm text-green-700">Retail, office work, restaurants (with restrictions)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 p-3 bg-red-50 rounded">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-800">Prohibited Work</h4>
                  <p className="text-sm text-red-700">Construction, hazardous machinery operation, late night hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-[#003087]" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="renew">
              <AccordionTrigger>Do I need to renew my work permit?</AccordionTrigger>
              <AccordionContent>
                Work permits must be renewed annually or when changing employers. Visit the guidance office to initiate the renewal process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="summer">
              <AccordionTrigger>Are there different rules for summer jobs?</AccordionTrigger>
              <AccordionContent>
                During summer break, you can work longer hours, but still need a valid work permit. Maximum 8 hours per day, 40 hours per week for ages 16-17.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="grades">
              <AccordionTrigger>Can my permit be revoked?</AccordionTrigger>
              <AccordionContent>
                Yes, work permits can be revoked if your grades drop significantly or if you violate labor laws. Maintaining good academic standing is required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkPermits;
