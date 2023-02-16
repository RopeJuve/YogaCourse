import "./Form.css";
import Input from "./Input";

const Form = () => {
  return (
    <div className="form__container" id="Contact">
      <div className="form__wrapper">
        <div className="form__heading">
          <h1>Get in Touch With Us for Yoga Course.</h1>
          <p>
            Get in touch with us for any kind of help. We are here to give you
            the best and also here to help you to find your yoga course.
          </p>
        </div>
        <div className="form__form-wrapper">
          <Input type="text" name='First Name'/>
          <Input type="text" name='Last Name'/>
          <Input type="email" name='Email address'/>
          <textarea rows="4" placeholder="Message"name="soft" />
          <div className="checked-box">
            <Input type="checkbox" label="" name=''/>
            <p>
              by clicking here you agree to our{" "}
              <a href="/">terms and policy.</a>
            </p>
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
