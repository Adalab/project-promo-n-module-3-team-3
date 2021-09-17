
// JS Imagen previsualización Jenny
const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
let photo = '';
function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  const imageForFetch = fr.readAsDataURL(myFile);
  return imageForFetch;

}
function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  fileField.setAttribute('value', fr.result);
  dataUser.photo = fr.result;
}
function fakeFileClick() {
  fileField.click();
}
fileField.addEventListener('change', getImage);

//Acción para el nombre y el trabajo
//variables
const inputTextElements = document.querySelectorAll('.js_inputtext');
const textPreviewElements = document.querySelectorAll('.js_previewtext');
function handlePreviewText() {
  textPreviewElements[0].innerHTML = inputTextElements[0].value;
  textPreviewElements[1].innerHTML = inputTextElements[1].value;
  setObjectInLocalStorage();
}
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('change', handlePreviewText);
}

//ACCIONES PARA LOS LINKS

//variables

const inputCardsLinks = document.querySelectorAll('.js_input_link');
const cardPreviewIcons = document.querySelectorAll('.js-icon-circle');

//preventDefault de los enlaces de la tarjeta

function handleClickCardLinks(event) {
  let iconListened = event.currentTarget;
  if (iconListened.href === 'http://localhost:3000/cards.html') {
    iconListened = event.preventDefault();
  }
}
for (const cardPreviewIcon of cardPreviewIcons) {
  cardPreviewIcon.addEventListener('click', handleClickCardLinks);
}

//funcion unica para los links
function handleCardLinks() {
  cardPreviewIcons[1].setAttribute(
    'href',
    'mailto:' + inputCardsLinks[0].value
  );

  cardPreviewIcons[0].setAttribute(
    'href',
    'tel:+34' + inputCardsLinks[1].value
  );

  cardPreviewIcons[2].setAttribute('href', 'https://www.linkedin.com/in/' + inputCardsLinks[2].value);



  cardPreviewIcons[3].setAttribute(
    'href',
    'https://github.com/' + inputCardsLinks[3].value
  );
  setObjectInLocalStorage();
}
for (const inputCardsLink of inputCardsLinks) {
  inputCardsLink.addEventListener('change', handleCardLinks);
}

// funcion para pintar localStorage en la tarjeta de preview
function paintCard(){
  const nameCard = document.querySelector('#name');
  nameCard.value = dataUser.name;
  const jobCard = document.querySelector('#job');
  jobCard.value = dataUser.job;
  const emailCard = document.querySelector('#email');
  emailCard.value = dataUser.email;
  const phoneCard = document.querySelector('#phone');
  phoneCard.value = dataUser.phone;
  const linkedinCard = document.querySelector('#linkedin');
  linkedinCard.value = dataUser.linkedin;
  const githubCard = document.querySelector('#github');
  githubCard.value = dataUser.github;
  profileImage.style.backgroundImage = `url(${dataUser.photo})`;
  profilePreview.style.backgroundImage = `url(${dataUser.photo})`;
  fileField.setAttribute('value', dataUser.photo);
  previewSection.classList.remove('palette1');
  previewSection.classList.remove('palette2');
  previewSection.classList.remove('palette3');
  previewSection.classList.remove('palette4');
  previewSection.classList.remove('palette5');
  previewSection.classList.add(`palette${dataUser.palette}`);
  handleCardLinks();
  handlePreviewText();
}
