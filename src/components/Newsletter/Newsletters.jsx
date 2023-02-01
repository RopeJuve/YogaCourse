import "./Newsletters.css";
import email from '../../assets/envelope (1) 1.png'

const Newsletters = () => {
  return (
    <div className="newaletter__container">
      <div className="newsletter__wrapper">
        <h1>Subscribe Our Newsletter</h1>
        <p>Subscribe our newsletter for further updates about us</p>
        <div className="newsletter__email-flex">
          <div className="email-input">
            <img src={email} alt='email' />
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
