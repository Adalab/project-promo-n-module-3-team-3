import '../styles/components/formShare.scss';
import Collapsable from './Collapsable';

const FormShare = (props) => {
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

				<div
					className={`js_content div_content  ${props.collapsableShare}`}>
					<button className="button__card js_button_share">
						<i className="far fa-address-card"></i> Crear tarjeta
					</button>
				</div>
			</fieldset>
			{/* // pendiente poner dentro del form la sección de compartir */}
			<section className="share__section hidden js_share_twitter">
				<h2 className="share__section--title js_sharetitle"></h2>
				<a
					href="/"
					className="share__section--link js_parrafo_share"
					target="blank"></a>
				<h3 className="titlecompartir">Compartir</h3>
				<div className="section_buttons">
					<button className="share__section--button">
						<a
							className="js_linktwitter linktwitter"
							target="blank"
							href="https://twitter.com/">
							<i className="fab fa-twitter"></i> Twitter
						</a>
					</button>
					<button className="share__section--button">
						<a
							className="js_linkFacebook linktwitter"
							target="blank"
							href="https://es-es.facebook.com/">
							<i className="fab fa-facebook"></i> Facebook
						</a>
					</button>
					<button className="share__section--button">
						<a
							className="js_linkLinkedin linktwitter"
							target="blank"
							href="https://www.linkedin.com/in/">
							<i className="fab fa-linkedin-in js-icon"></i>{' '}
							Linkedin
						</a>
					</button>
				</div>
			</section>
		</>
	);
};

export default FormShare;
