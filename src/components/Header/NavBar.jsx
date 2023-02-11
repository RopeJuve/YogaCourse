import "./Header.css";
import logo from "../../assets/Group 5739.png";
import { useState} from "react";

const NavBar = () => {
  const [open , setOpen] = useState(false);

  return (
    <nav className="nav__container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>Yola.</p>
      </div>
      <div className="nav-list">
        {["Home", "Classes", "Features", "Contact"].map((listItem, index) => (
          <a key={index} href={`#${listItem}`}>
            {listItem}
          </a>
        ))}
      </div>
      <div className="nav__btn-container">
        <button className="btn-sing-in">Sing In</button>
        <button className="btn-sing-up">Sing Up</button>
        <div className={open ? "hamburger-btn open" : 'hamburger-btn'}>
        <button type="button" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
        <div className={open ? 'nav-list-mobile' : 'close'} onClick={() => setOpen(!open)}>
        {["Home", "Classes", "Features", "Contact"].map((listItem, index) => (
          <a key={index} href={`#${listItem}`}>
            {listItem}
          </a>
        ))}
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
