import "./Hero.css";
import Card from "./Card/Card";
import CardFull from "./Card/CardFull";
import img from "../../assets/young-smiling-guy-sitting-fitness-mat-meditating-removebg 1.png";
import img2 from "../../assets/man-standing-one-leg-full-shot (1).png";
import img1 from "../../assets/man-standing-one-leg-full-shot.png";
import { useRef } from "react";
import { useObserve } from "../../hooks/useObserve";
const Hero = () => {
  const heroRef = useRef(null);
  const isIntersecting = useObserve(heroRef);
  console.log(isIntersecting);
  return (
    <div ref={heroRef} className="hero__container">
      <div
        className={
          isIntersecting
            ? "hero__text-container show"
            : "hero__text-container hide"
        }
      >
        <div className="text-flex-column">
          <h1>Yoga to Release Stress</h1>
          <p>
            Yoga is a way of life, rather than a chore. Counteract the stresses
            of modern life by becoming more mindful and compassionate.
          </p>
          <div className="hero__btn-container">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="hero__img-container">
          <div className="shape">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div
        className={
          isIntersecting
            ? "hero__card-container show-card"
            : "hero__card-container hide-card"
        }
      >
        <div className="hero__card-wrapper">
          <div className="card-flex">
            <Card
              title="Make Your Own Plan For Yoga."
              number="1"
              imgUrl={img1}
            />
            <Card
              title="Find a Yoga Mentor For You."
              number="2"
              imgUrl={img2}
            />
          </div>
          <div className="cardFull">
            <CardFull />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
