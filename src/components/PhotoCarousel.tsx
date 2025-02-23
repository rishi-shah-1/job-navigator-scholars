
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const schoolImages = [
  {
    url: "/lovable-uploads/770165bd-3e56-42ae-84af-c44b2a1c1ebb.png",
    caption: "SWMHS Logo"
  },
  {
    url: "https://swmhs.sayrevillek12.net/pics/site/styles/resize_1440x600/public/pages/photo/27641/edited_front.jpg?itok=c4Z4j8jx",
    caption: "School Front View"
  },
  {
    url: "https://swmhs.sayrevillek12.net/pics/site/styles/resize_1440x600/public/pages/photo/27641/IMG_0345.JPG?itok=NOYfLC9O",
    caption: "School Campus"
  },
  {
    url: "https://swmhs.sayrevillek12.net/pics/site/styles/resize_1440x600/public/pages/photo/27641/IMG_0482.JPG?itok=8UQ2qXpr",
    caption: "School Facilities"
  }
];

const PhotoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % schoolImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Carousel
      className="w-full max-w-5xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={(api) => {
        api?.on("select", () => {
          setCurrentSlide(api.selectedScrollSnap());
        });
      }}
    >
      <CarouselContent>
        {schoolImages.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
      <div className="flex justify-center gap-2 mt-4">
        {schoolImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? "bg-[#003087] w-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default PhotoCarousel;
