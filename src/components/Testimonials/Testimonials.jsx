import "./Testimonials.css";
import icon from "../../assets/Mask Group.png";
import { useState} from "react";

const TestimonialCard = ({ slideNum, testimonial }) => {
  return (
    <div
      className="testimonials__card"
      style={{ transform: `translateX(-${slideNum * 100}%)` }}
    >
      <img src={icon} alt="img" />
      <p>{testimonial}</p>
      <h3>Trent Boult</h3>
      <p>Web Designer</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplay = () => {
    

   
  }


  
  const slidesData = [
    {
      id: 1,
      testimonial:
        "1This is the great and best platform for yoga and meditation. I got avery good body at body now, my body shapes is fine now. I am very grateful to them. They are providing a great service.",
    },
    {
      id: 2,
      testimonial:
        "2This is the great and best platform for yoga and meditation. I got avery good body at body now, my body shapes is fine now. I am very grateful to them. They are providing a great service.",
    },
    {
      id: 3,
      testimonial:
        "3This is the great and best platform for yoga and meditation. I got avery good body at body now, my body shapes is fine now. I am very grateful to them. They are providing a great service.",
    },
    {
      id: 4,
      testimonial:
        "4This is the great and best platform for yoga and meditation. I got avery good body at body now, my body shapes is fine now. I am very grateful to them. They are providing a great service.",
    }
  ];

  return (
    <div className="testimonials__container">
      <div className="testimonials__wrapper">
        <h1>What People Say About Us</h1>
        <div className="testimonials__card-wrapper">
          {slidesData.map((s) => (
            <TestimonialCard
              key={s.id}
              slideNum={currentSlide}
              testimonial={s.testimonial}
            />
          ))}
        </div>

        <div className="dots">
          {slidesData.map((_, index) => (
            <div className="dot-wrapper"  key={index}>
              <div
                className={currentSlide == index ? "dot active" : "dot"}
                data-current-slide={index}
                onClick={(e) =>
                  setCurrentSlide(e.target.getAttribute("data-current-slide"))
                }
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
