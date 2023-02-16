import "./Pricing.css";
import PricingPlanCard from './PricingPlanCard'

const Pricing = () => {
  return (
    <div className="pricing__container">
      <div className="pricing__wrapper">
        <div className="pricing__head-container">
          <h1>Pick a Pricing Plan</h1>
          <p>
            Pick a pricing plan and get started your journey with us for build
            your body and mind
          </p>
        </div>
        <div className="pricing__card-container">
          <PricingPlanCard
            title="Single yoga class"
            price="15"
            recommend={false}
            access={[
              "Pay as you go",
              "Perfect for non-residence",
              "Acces to all classes",
            ]}
          />
          <PricingPlanCard
            title="1 month membership"
            price="60"
            recommend={true}
            access={[
              "Pay as you go",
              "Perfect for non-residence",
              "Access to all classes",
              "Access to all classes",
            ]}
          />
          <PricingPlanCard
            title="3 month membership"
            price="150"
            recommend={false}
            access={[
              "Pay as you go",
              "Perfect for non-residence",
              "Acces to all classes",
              "Acces to all classes",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
