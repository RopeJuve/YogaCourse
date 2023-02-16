import "./Countdown.css";
import Text from "./Text";

const Countdown = () => {
  return (
    <div className="countdown-container">
      <div className="countdown-wrapper">
        <div className="left-div">
          <h1>Relax And Enjoy a Personalized Day Yoga With Us.</h1>
          <h2>John Cena</h2>
          <div className="founder">
            <h3>John Cena</h3>
            <p>/Founder</p>
          </div>
        </div>
        <div className="text-wrapper">
          <div>
            <Text
              title="05+"
              subtitle="Years of Experience"
              paragraph="We are 05 years of experienced in this yoga field. Giving the best instructions."
            />
            <Text
              title="15+"
              subtitle="Experienced Trainer"
              paragraph="We have over fifteen dedicated and experienced trainer for yoga and meditation."
            />
          </div>
          <div>
            <Text
              title="5K+"
              subtitle="Happy Clients"
              paragraph="We have over five thousand clients all over the world. They are very satisfied."
            />
            <Text
              title="24+"
              subtitle="Years of Experience"
              paragraph="Yoga is a physical, mental and spiritual practice discipline. We provide 24+ classes monthly."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
