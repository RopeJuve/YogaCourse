import "./Header.css";
import logo from "../../assets/Group 5739.png";
import Menu from "../../assets/Menu.png";

const NavBar = () => {
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
        <img src={Menu} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
