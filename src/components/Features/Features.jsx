import "./Features.css";
import img from "../../assets/Group 5782.png";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-wrapper">
        <img src={img} alt="img" />
        <div className="content-wraper">
          <div className="content-header">
            <h1>The Better Way to Start Yoga</h1>
          </div>
          <div className="content-text">
            <p>
              Practice anywhere, anytime. Explore a new way to exercise and
              learn more about yourself. We are providing the best.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
