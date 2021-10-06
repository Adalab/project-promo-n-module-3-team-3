import '../styles/components/landing.scss';
import { Link }  from 'react-router-dom';
const Landing = () =>{




    return (
<main>
  <section class="main__landing--box">
    <h1 class="main__landing--title">Crea tu tarjeta de visita</h1>
    <h3 class="main__landing--subtitle">
      Crea mejores contactos profesionales de forma fácil y cómoda
    </h3>
    <div class="main__landing--rectangule">
      <article class="icon__designs">
        <i class="far fa-object-ungroup"></i>
        <i class="far fa-keyboard"></i>
        <i class="fas fa-share-alt"></i>
      </article>
      <article class="text__designs">
        <h3 class="desings">Diseña</h3>
        <h3 class="fill">Rellena</h3>
        <h3 class="share">Comparte</h3>
      </article>
    </div>
    <Link to='/cards'>
    <button class="main__landing--button text__button">
       comenzar
    </button>
    </Link>
  </section>
</main>


    );
}

export default Landing;