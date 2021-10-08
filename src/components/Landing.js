import "../styles/components/landing.scss";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <main>
      <section className="main__landing--box">
        <h1 className="main__landing--title">Crea tu tarjeta de visita</h1>
        <h3 className="main__landing--subtitle">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </h3>
        <div className="main__landing--rectangule">
          <article className="icon__designs">
            <i className="far fa-object-ungroup"></i>
            <i className="far fa-keyboard"></i>
            <i className="fas fa-share-alt"></i>
          </article>
          <article className="text__designs">
            <h3 className="desings">Diseña</h3>
            <h3 className="fill">Rellena</h3>
            <h3 className="share">Comparte</h3>
          </article>
        </div>
        <Link to="/cards">
          <button className="main__landing--button text__button">
            comenzar
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Landing;
