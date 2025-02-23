
import { Facebook, Twitter, Linkedin, Youtube, Pinterest } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialShare = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.sayrevillek12.net%2Flivestream",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/intent/post?text=Sayreville%20Public%20Schools%20Live%20Stream%20-%20Sayreville%20School%20District&url=https%3A%2F%2Fwww.sayrevillek12.net%2Flivestream",
      color: "hover:bg-sky-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7291997244931604480",
      color: "hover:bg-blue-700"
    },
    {
      name: "Pinterest",
      icon: <Pinterest className="h-5 w-5" />,
      url: "https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.sayrevillek12.net%2Flivestream&media=&description=Sayreville+Public+Schools+Live+Stream+-+Sayreville+School+District",
      color: "hover:bg-red-600"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: "https://youtube.com/@boevideovideo4027?si=J0I6VAf6bRzTAIoB",
      color: "hover:bg-red-500"
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="outline"
          size="icon"
          onClick={() => handleShare(social.url)}
          className={`rounded-full bg-white shadow-lg hover:text-white transition-colors ${social.color}`}
          title={`Share on ${social.name}`}
        >
          {social.icon}
        </Button>
      ))}
    </div>
  );
};

export default SocialShare;
