import { useRef } from 'react';

const ImageReader = (props) => {
  const fileElement = useRef(); // referencia al input file
  const fileReader = new FileReader(); // Creamos un lector de ficheros con FileReader: funcionalidad nativa de JS

  // Cuando la usuaria selecciona una imagen se ejecuta esta función
  const handleFile = () => {
    const selectedFile = fileElement.current.files[0]; // fileElement.current.files es un array con todas las imagenes seleccionadas
    // Si la usuaria ha seleccionado al menos una imagen selectedFile es diferente de undefined
    if (selectedFile) {
      fileReader.readAsDataURL(selectedFile); // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria. Cuando esta acción termine fileReader lanzará el evento 'load'
    }
  };

  // Esta función se ejecuta cuando fileReader lanza el evento 'load'
  const getImage = () => {
    props.handleImage(fileReader.result); // Cuando la imagen ya está lista en fileReader.result tenemos su contenido. Hacemos lifting
  };

  fileReader.addEventListener('load', getImage); // Escuchamos el evento load de fileReader y cuando se lance lo manejamos con la función getImage
  return (
    <>
      <label htmlFor="image" className="label">
        Imagen de perfil
        <span className="span">*</span>
      </label>
      <div className="action">
        <label className="action__upload-btn" htmlFor="photo">
          Añadir Imagen
        </label>
        <input
          ref={fileElement}
          onChange={handleFile}
          type="file"
          name="photo"
          id="photo"
          className="action__hiddenField js__profile-upload-btn"
          required
        />
      </div>

      <div className="profile">
        <div
          className="AQUI profile__preview js__profile-preview"
          style={{ backgroundImage: `url(${props.data.image})` }}
        ></div>
      </div>
    </>
  );
  //handleImage={handleImage} />
};

export default ImageReader;
