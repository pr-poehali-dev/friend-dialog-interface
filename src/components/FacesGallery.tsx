import { useRef, useEffect } from "react";

// Массив с разнообразными счастливыми людьми
const faces = [
  { id: 1, imageUrl: "/placeholder.svg", mood: "Радость" },
  { id: 2, imageUrl: "/placeholder.svg", mood: "Счастье" },
  { id: 3, imageUrl: "/placeholder.svg", mood: "Восторг" },
  { id: 4, imageUrl: "/placeholder.svg", mood: "Улыбка" },
  { id: 5, imageUrl: "/placeholder.svg", mood: "Смех" },
  { id: 6, imageUrl: "/placeholder.svg", mood: "Веселье" },
];

const FacesGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Клонируем элементы для создания бесконечной прокрутки
    const scrollWidth = scrollElement.scrollWidth / 2;
    const scroll = () => {
      if (scrollElement.scrollLeft >= scrollWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };

    const timer = setInterval(scroll, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white py-4 border-t border-gray-200">
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap"
      >
        {/* Дублируем список лиц для создания непрерывной прокрутки */}
        {[...faces, ...faces].map((face, index) => (
          <div 
            key={`${face.id}-${index}`} 
            className="inline-block mx-2 w-32 h-24 flex-shrink-0"
          >
            <div className="bg-gray-100 rounded-md p-2 h-full flex flex-col items-center justify-center">
              <img 
                src={face.imageUrl} 
                alt={face.mood} 
                className="w-12 h-12 object-cover rounded-full mb-1"
              />
              <span className="text-sm font-medium">{face.mood}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacesGallery;
