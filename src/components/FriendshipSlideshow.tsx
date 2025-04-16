import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface SlideData {
  imageUrl: string;
  caption: string;
}

const slides: SlideData[] = [
  {
    imageUrl: "/placeholder.svg",
    caption: "Дружба начинается с улыбки"
  },
  {
    imageUrl: "/placeholder.svg",
    caption: "Друзья всегда поддержат в трудную минуту"
  },
  {
    imageUrl: "/placeholder.svg",
    caption: "Настоящий друг - это второе я"
  }
];

const FriendshipSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <div className="relative aspect-video">
        <img 
          src={slides[currentSlide].imageUrl} 
          alt={slides[currentSlide].caption}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-lg font-medium">{slides[currentSlide].caption}</p>
      </div>
      <div className="flex justify-center pb-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </Card>
  );
};

export default FriendshipSlideshow;
