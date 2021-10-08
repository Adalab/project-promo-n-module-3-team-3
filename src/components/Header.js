import logo from "../images/logo-awesome-profile-cards.svg";
import "../styles/components/header.scss";

const Header = (props) => {
  return (
    <header className={props.classHeader}>
      <div>
        <a href="http://beta.adalab.es/project-promo-n-module-2-team-2/">
          <img
            className="cards"
            src={logo}
            alt="Logo de awesome profile cards"
            title="Web del proyecto"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
