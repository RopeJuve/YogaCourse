import "./PricingPlanCard.css";
import img from "../../assets/Group 5756.png";
import img1 from "../../assets/Group 5763.png";

const PricingPlanCard = ({ title, price, recommend, acces }) => {
  const isred = recommend
    ? "pricingPlanCard__header-red"
    : "pricingPlanCard__header";
  return (
    <div className="pricingPlanCard__container">
      <div className={isred}>
        {recommend && <h3>RECOMMENDED</h3>}
        <h3>{title}</h3>
        <p>${price}.</p>
      </div>
      <div className="pricingPlanCard__acces">
        <p>Discover your favorite class!</p>
        <ul className="ulList">{acces.map((item, index) => (
          <li className="list" key={index}>
            <img src={img} alt="img" /> {item}
          </li>
        ))}
        </ul>

        <div className="btn-flex">
          <button>Book now</button>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PricingPlanCard;
