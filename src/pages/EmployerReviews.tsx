
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, Building2, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: number;
  employerName: string;
  rating: number;
  comment: string;
  position: string;
  date: string;
  helpful: number;
}

const mockReviews: Review[] = [
  {
    id: 1,
    employerName: "Tech Solutions Inc",
    rating: 4,
    comment: "Great internship experience with supportive mentors.",
    position: "Software Development Intern",
    date: "2024-02-15",
    helpful: 12
  },
  {
    id: 2,
    employerName: "Local Healthcare Center",
    rating: 5,
    comment: "Excellent learning environment and flexible hours for students.",
    position: "Medical Assistant Intern",
    date: "2024-02-10",
    helpful: 8
  }
];

const EmployerReviews = () => {
  const { toast } = useToast();
  const [reviews] = useState<Review[]>(mockReviews);
  const [newReview, setNewReview] = useState({
    employerName: "",
    rating: 0,
    comment: "",
    position: ""
  });

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer' : ''}`}
        onClick={() => interactive && setNewReview({ ...newReview, rating: index + 1 })}
      />
    ));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.employerName || !newReview.rating || !newReview.comment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Review Submitted",
      description: "Thank you for sharing your experience!"
    });
    
    setNewReview({
      employerName: "",
      rating: 0,
      comment: "",
      position: ""
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-[#003087] mb-6">Employer Reviews</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Write a Review</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Employer Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={newReview.employerName}
                onChange={(e) => setNewReview({ ...newReview, employerName: e.target.value })}
                placeholder="Enter employer name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Position</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={newReview.position}
                onChange={(e) => setNewReview({ ...newReview, position: e.target.value })}
                placeholder="Your position/role"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <div className="flex gap-1">
                {renderStars(newReview.rating, true)}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Review</label>
              <Textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Share your experience..."
                className="min-h-[100px]"
              />
            </div>
            
            <Button type="submit" className="bg-[#003087] hover:bg-[#002065]">
              Submit Review
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#003087]" />
                    {review.employerName}
                  </h3>
                  <p className="text-sm text-gray-600">{review.position}</p>
                </div>
                <div className="flex gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{review.comment}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{new Date(review.date).toLocaleDateString()}</span>
                <button className="flex items-center gap-1 hover:text-[#003087]">
                  <ThumbsUp className="h-4 w-4" />
                  {review.helpful} found helpful
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmployerReviews;
