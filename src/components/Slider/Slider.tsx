import { useState } from "react";
import type { ReactNode} from "react";
import "./Slider.css";
 

type SliderItem = {
id: string | number;
};

type SliderProps<T extends SliderItem> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  };

 

const Slider = <T extends SliderItem>({items, renderItem}: SliderProps<T>) => {
const [currentSlide, setCurrentSlide] = useState(0);
const desktopSlides: T[][] = [];

for (let i = 0; i < items.length; i += 3) {
  desktopSlides.push(items.slice(i, i + 3));
  }

const mobileSlides = items;

const nextSlide = () => {
    setCurrentSlide((prev) => {
    if (window.innerWidth <= 992) {
    return prev >= mobileSlides.length - 1 ? 0 : prev + 1;
    }

      return prev >= desktopSlides.length - 1 ? 0 : prev + 1;
    });

    };

const prevSlide = () => {
setCurrentSlide((prev) => {
if (window.innerWidth <= 992) {
return prev <= 0 ? mobileSlides.length - 1 : prev - 1;
}

  return prev <= 0 ? desktopSlides.length - 1 : prev - 1;
});

};

 

return (
  <div className="slider" >
  <div className="desktop-slider">
  <div className="slider-window">
  <div className="slider-track" style={{transform: `translateX(-${currentSlide * 100}%)`,}}>
  {desktopSlides.map((slide, index) => (
  <div className="slide" key={index}>
  {slide.map((item) => (
  <div className="container-card" key={item.id}>
  {renderItem(item)}
  </div>
  ))}
  </div>
  ))}
  </div>
  </div>
  </div>

  <div className="mobile-slider">
    <div className="slider-window">
      <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)`,}}>
        {mobileSlides.map((item) => (
          <div className="slide" key={item.id}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="icons">
    <button className="prev" onClick={prevSlide} aria-label="Previous slide">
      <img  src="/assets/img/left.png" alt="" />
    </button>

    <button className="next" onClick={nextSlide} aria-label="Next slide">
      <img src="/assets/img/right.png" alt="" />
    </button>
  </div>
</div>

);
};

export default Slider;