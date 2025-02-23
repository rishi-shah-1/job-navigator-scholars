import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const AUTOMATED_RESPONSES = {
  default: "Thank you for your message. A guidance counselor will respond shortly. For immediate assistance, please call (732) 525-5252.",
  resume: "For resume help, try our Resume Builder tool or schedule an appointment with your guidance counselor.",
  application: "For application assistance, check out our Application Tracker or visit the guidance office during office hours.",
  interview: "Need interview tips? Schedule a mock interview session with our career counselors.",
  jobs: "Browse our job listings or use our Smart Job Matching tool to find opportunities that match your interests.",
  scholarship: "Check out our scholarship listings and make sure to meet with your counselor to discuss opportunities.",
};

const Support = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you with your career journey today? You can ask about resumes, applications, interviews, jobs, or scholarships.",
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const getAutomatedResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('resume')) return AUTOMATED_RESPONSES.resume;
    if (lowerMessage.includes('application')) return AUTOMATED_RESPONSES.application;
    if (lowerMessage.includes('interview')) return AUTOMATED_RESPONSES.interview;
    if (lowerMessage.includes('job')) return AUTOMATED_RESPONSES.jobs;
    if (lowerMessage.includes('scholarship')) return AUTOMATED_RESPONSES.scholarship;
    return AUTOMATED_RESPONSES.default;
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Automated response
    setTimeout(() => {
      const supportMessage: Message = {
        id: messages.length + 2,
        text: getAutomatedResponse(newMessage),
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };

  return (
    <div className="page-container py-8">
      <Card className="max-w-2xl mx-auto h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#003087]">
            <MessageSquare className="h-5 w-5" />
            Live Support
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex gap-2 max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-[#003087] text-white'
                      : 'bg-gray-100 text-gray-800'
                  } rounded-lg p-3`}
                >
                  {message.sender === 'support' && (
                    <User className="h-5 w-5 text-gray-500" />
                  )}
                  <div>
                    <p>{message.text}</p>
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <div className="flex w-full gap-2">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button onClick={sendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Support;
