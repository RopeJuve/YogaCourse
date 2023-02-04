import "./Form.css";
import Input from "./Imput";

const Form = () => {
  return (
    <div className="form__container">
      <div className="form__wraper">
        <div className="form__heading">
        <h1>Get in Touch With Us for Yoga Course.</h1>
        <p>
          Get in touch with us for any kind of help. We are here to give you the
          best and also here to help you to find your yoga course.
        </p>
        </div>
        <div className="form__form-wraper">
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="email" placeholder="Email address" />
          <textarea rows="4" placeholder="Message" wrap="soft" />
          <div className="checked-box">
            <Input type="checkbox" placeholder="" />
            <p>by clicking here you agree to our <a href="/">terms and policy.</a></p>
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
