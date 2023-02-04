
import './Footer.css'
import logo from '../../assets/Group 5739.png'
import social from '../../assets/Social (1).png'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__logo-wrapper">
        <img src={logo} alt="logo" />
        <p>Yola.</p>
      </div>
      <p>© 2022 UI HUT. All rights reserved.</p>
      <div className="footer__social-wrapper">
        <img src={social} alt='' />
      </div>
    </div>
  );
};

export default Footer;
