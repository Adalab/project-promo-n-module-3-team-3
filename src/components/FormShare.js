import '../styles/components/formShare.scss';

const FormShare = (props) => {
  return (
    <>
      <fieldset>
        <div
          className="section__title js_headerCollapsable"
          onClick={props.handlerCollapsableShare}
        >
          <i className="fas fa-share-alt"></i>
          <h2 className="title">Comparte</h2>
          <i className={`fas ${props.arrow3} arrow js_arrow`}></i>
        </div>

        <div className={`js_content div_content ${props.collapsableShare}`}>
          <button className="button__card js_button_share">
            <i className="far fa-address-card"></i> Crear tarjeta
          </button>
        </div>
      </fieldset>
      // pendiente poner dentro del form la sección de compartir
      <section className="share__section  js_share_twitter">
        <h2 className="share__section--title js_sharetitle"></h2>
        <a className="share__section--link js_parrafo_share" target="blank"></a>
        <h3 className="titlecompartir">Compartir</h3>
        <div className="section_buttons">
          <button className="share__section--button">
            <a
              className="js_linktwitter linktwitter"
              target="blank"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </button>
          <button className="share__section--button">
            <a
              className="js_linkFacebook linktwitter"
              target="blank"
              href="https://es-es.facebook.com/"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </button>
          <button className="share__section--button">
            <a
              className="js_linkLinkedin linktwitter"
              target="blank"
              href="https://www.linkedin.com/in/"
            >
              <i className="fab fa-linkedin-in js-icon"></i> Linkedin
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default FormShare;
