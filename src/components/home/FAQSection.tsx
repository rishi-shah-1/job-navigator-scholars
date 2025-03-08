
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get a work permit?",
    answer: "Visit the guidance office to pick up a work permit application. You'll need parent/guardian consent, a job offer, and proof of age. The process typically takes 3 business days."
  },
  {
    question: "What jobs can I work at 16?",
    answer: "At 16, you can work in retail, food service, offices, and other non-hazardous environments. There are restrictions on hours and certain tasks. Check the Work Permits page for details."
  },
  {
    question: "How many hours can I work during school?",
    answer: "Students 16-17 years old can work up to 8 hours per day, maximum 40 hours per week. During school days, you cannot work during school hours or past 7 PM."
  },
  {
    question: "Do I need to maintain certain grades to work?",
    answer: "Yes, you must maintain satisfactory academic performance. Your work permit can be revoked if your grades drop significantly."
  }
];

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-6 w-6 text-navy" />
        <h2 className="text-2xl font-bold text-navy">{t("Frequently Asked Questions")}</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {t(faq.question)}
            </AccordionTrigger>
            <AccordionContent>
              {t(faq.answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
export { faqs };
