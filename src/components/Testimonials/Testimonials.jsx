import "./Testimonials.css";
import icon from "../../assets/Mask Group.png";
import arrow from "../../assets/Arrow.png";

const Testimonials = () => {
  return (
    <div className="testimonials__container">
      <div className="testimonials__wrapper">
        <h1>What People Say About Us</h1>
        <div className="testimonials__card">
          <img src={icon} alt="img" />
          <p>
            This is the great and best platform for yoga and meditation. I got a
            very good body at body now, my body shapes is fine now. I am very
            grateful to them. They are providing a great service.
          </p>
          <h3>Trent Boult</h3>
          <p>Web Designer</p>
        </div>
        <img src={arrow} alt="img" />
      </div>
    </div>
  );
};

export default Testimonials;
