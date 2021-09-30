import '../styles/components/footer.scss';
import adalab from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">JavaS the hutt &copy; 2021</p>
      <a href="https://adalab.es/" target="_blank" rel="noreferrer">
        <img
          className="footer__image"
          src={adalab}
          alt="Adalab"
          title="go to Adalab"
        />
      </a>
    </footer>
  );
};

export default Footer;
