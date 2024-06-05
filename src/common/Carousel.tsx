import { useState, useEffect } from "react";
import ArrowBack from "../assets/icons/arrow_back.svg";
import ArrowForward from "../assets/icons/arrow_forward.svg";
import Star from "../assets/icons/star.svg";

interface CarouselProps {
  slides: Slide[];
}

interface Slide {
  src: string;
  text: string;
  name: string;
  country: string;
}

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  function previousSlide() {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [slides.length]);

  return (
    <div className="relative h-[400px] max-w-[400px] overflow-hidden rounded-2xl">
      <div
        className="flex transition duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full min-h-fit w-full flex-shrink-0"
          >
            <img
              className="min-h-[400px] object-cover"
              src={slide.src}
              alt={`Slideshow image ${index}`}
            />
            <div className="absolute left-0 top-44 flex h-96 w-full flex-col gap-2 bg-gray-800/[0.6] p-4 text-white lg:gap-4">
              <p>{slide.text}</p>
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">{slide.name}</h1>
                <div className="hidden lg:flex">
                  <img src={Star} className="h-5 w-5" alt="" />
                  <img src={Star} className="h-5 w-5" alt="" />
                  <img src={Star} className="h-5 w-5" alt="" />
                  <img src={Star} className="h-5 w-5" alt="" />
                  <img src={Star} className="h-5 w-5" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        onClick={previousSlide}
        className="absolute bottom-5 right-16 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
        src={ArrowBack}
        alt="Previous slide button"
      />
      <img
        onClick={nextSlide}
        className="absolute bottom-5 right-5 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
        src={ArrowForward}
        alt="Next slide button"
      />
    </div>
  );
}

export default Carousel;
