import "./Testimonials.css";
import icon from "../../assets/Mask Group.png";
import { useRef } from "react";

const TestimonialCard = () => {
  return (
    <div>
      <img src={icon} alt="img" />
      <p>
        This is the great and best platform for yoga and meditation. I got a
        very good body at body now, my body shapes is fine now. I am very
        grateful to them. They are providing a great service.
      </p>
      <h3>Trent Boult</h3>
      <p>Web Designer</p>
    </div>
  );
};

const Testimonials = () => {
  const slideRef = [useRef(null), useRef(null), useRef(null)];

  const slides = [
    <TestimonialCard />,
    <TestimonialCard />,
    <TestimonialCard />,
  ];

  const goToSlide = (slide) => {
    slides.forEach((_, i) => {
      console.log(slide[i])
      slideRef[i].current.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  return (
    <div className="testimonials__container">
      <div className="testimonials__wrapper">
        <h1>What People Say About Us</h1>
        <div className="testimonials__card-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="testimonials__card" ref={slideRef[index]}>
              {slide}
            </div>
          ))}
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className="dot"
              data-current-slide={index}
              onClick={(e) =>
                goToSlide(e.target.getAttribute("data-current-slide"))
              }
            >
              {index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
