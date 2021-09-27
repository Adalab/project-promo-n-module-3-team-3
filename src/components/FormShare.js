import '../styles/layout/FormShare.scss';

const FormShare = () => {
	const buttonShare = document.querySelector('.js_button_share');
	const parrafoShare = document.querySelector('.js_parrafo_share');
	const sectionShare = document.querySelector('.js_share_twitter');
	const shareTitle = document.querySelector('.js_sharetitle');
	const linkTwitter = document.querySelector('.js_linktwitter');
	const linkFacebook = document.querySelector('.js_linkFacebook');
	const linkLinkedin = document.querySelector('.js_linkLinkedin');
	let dataUser = {
		palette: '',
		name: '',
		job: '',
		email: '',
		phone: '',
		linkedin: '',
		github: '',
		photo: '',
	};
	const form = document.querySelector('.js_form');
	function handlerFormData(ev) {
		const inputId = ev.target.id;
		const inputValue = ev.target.value;
		dataUser[inputId] = inputValue;
	}
	form.addEventListener('change', handlerFormData);
	function handleCreateBtn(ev) {
		ev.preventDefault();
		fetch('https://awesome-profile-cards.herokuapp.com/card', {
			method: 'POST',
			body: JSON.stringify(dataUser),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				sectionShare.classList.remove('hidden');
				if (data.success === true) {
					shareTitle.innerHTML = 'La tarjeta ha sido creada';
					parrafoShare.innerHTML = data.cardURL;
					parrafoShare.setAttribute('href', data.cardURL);
					linkTwitter.href = `https://twitter.com/intent/tweet?url=${data.cardURL}`;
					linkFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${data.cardURL}`;
					linkLinkedin.href = `https://www.linkedin.com/shareArticle?url=${data.cardURL}`;
				} else {
					shareTitle.innerHTML = 'Error al crear tarjeta:';
					parrafoShare.innerHTML =
						'Por favor, revise los datos introducidos';
					parrafoShare.removeAttribute('href');
				}
			});
	}
	buttonShare.addEventListener('click', handleCreateBtn);

	return (
		<section className="share__section  js_share_twitter">
			<h2 className="share__section--title js_sharetitle"></h2>
			<a
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
						<i className="fab fa-linkedin-in js-icon"></i> Linkedin
					</a>
				</button>
			</div>
		</section>
	);
};

export default FormShare;
