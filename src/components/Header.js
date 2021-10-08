import logo from "../images/logo-awesome-profile-cards.svg";
import "../styles/components/header.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={props.classHeader}>
      <div>
        <Link to="/">
          <img
            className="cards"
            src={logo}
            alt="Logo de awesome profile cards"
            title="Web del proyecto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
