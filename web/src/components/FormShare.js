import "../styles/components/formShare.scss";
import Collapsable from "./Collapsable";
import { useState } from "react";
import api from "../services/callToApi";

const FormShare = (props) => {
  const [urlShare, setUrlShare] = useState("");
  const [successCard, setSuccessCard] = useState("hidden");
  const [errorCard, setErrorCard] = useState("hidden");
  const [cardCreated, setCardCreated] = useState("");

  const [link, setLink] = useState("");
  const handleFetch = (ev) => {
    ev.preventDefault();

    api(props.data).then((response) => {
      console.log(response.cardURL);
      setUrlShare(response.cardURL);
      if (response.success) {
        setSuccessCard("");
        setErrorCard("hidden");
        setCardCreated("");
        setLink("");
      } else {
        setSuccessCard("hidden");
        setErrorCard("");
        setCardCreated("hidden");
        setLink("hidden");
      }
    });
  };
  return (
    <>
      <fieldset>
        <Collapsable
          className="fas fa-share-alt"
          text="Comparte"
          handlerCollapsableShare={props.handlerCollapsableShare}
          arrow3={props.arrow3}
          collapsableShare={props.collapsableShare}
        />

        <div className={`js_content div_content  ${props.collapsableShare}`}>
          <button
            className="button__card js_button_share"
            title="Crear Tarjeta"
            target="_blank"
            onClick={handleFetch}
          >
            <i className="far fa-address-card"></i> Crear tarjeta
          </button>
        </div>
      </fieldset>
      <section
        className={`share__section ${successCard} ${cardCreated} js_share_twitter`}
      >
        <h2 className={`share__section--title js_sharetitle `}>
          La tarjeta ha sido creada
        </h2>

        <a
          className="share__section--link js_parrafo_share"
          href={urlShare}
          target="blank"
        >
          {urlShare}
        </a>
        <h3 className={`titlecompartir ${cardCreated}`}>Compartir</h3>
        <div className="section_buttons">
          <button className={`share__section--button ${link}`}>
            <a
              className="js_linktwitter linktwitter"
              target="blank"
              href={`https://twitter.com/intent/tweet?url=${urlShare}`}
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </button>
          <button className={`share__section--button ${link}`}>
            <a
              className="js_linkFacebook linktwitter"
              target="blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=${urlShare}`}
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </button>
          <button className={`share__section--button ${link}`}>
            <a
              className="js_linkLinkedin linktwitter"
              target="blank"
              href={`https://www.linkedin.com/shareArticle?url=${urlShare}`}
            >
              <i className="fab fa-linkedin-in js-icon"></i>
              Linkedin
            </a>
          </button>
        </div>
      </section>
      <section className={`share__section ${errorCard} js_share_twitter`}>
        <h2 className="share__section--title js_sharetitle ">
          Error al crear tarjeta:
        </h2>
        <p className="share__section--link js_parrafo_share">
          Por favor, revise los datos introducidos
        </p>
      </section>
    </>
  );
};
export default FormShare;
