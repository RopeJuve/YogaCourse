import "./CourseCard.css";
import img from "../../assets/Rating.png";

const CorseCard = ({ imgUrl, title, text }) => {
  return (
    <div className="course__container">
      <div className="course__content-wrapper">
        <img src={imgUrl} alt={imgUrl} />
        <div className="course__content-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="course__content-footer">
          <div className="rating">
            <img src={img} alt="img" />
            <p>(18)</p>
          </div>
          <a href="/">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default CorseCard;
