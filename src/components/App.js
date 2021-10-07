// Fichero src/components/App.js
import { useState } from 'react';
import '../styles/app.scss';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [data, setData] = useState({
    palette: 'palette1',
    name: '',
    job: '',
    image:
      'https://i1.wp.com/www.puntogeek.com/wp-content/uploads/2011/01/jabbascript.jpg?resize=527%2C348',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });
  console.log(data.image);
  const handleImage = (imageData) => {
    setData({ ...data, image: imageData });
  };

  const handleInput = (targetName, targetValue) => {
    if (targetName === 'name') {
      setData({
        ...data,
        name: targetValue,
      });
    } else if (targetName === 'job') {
      setData({
        ...data,
        job: targetValue,
      });
    } else if (targetName === 'phone') {
      setData({
        ...data,
        phone: targetValue,
      });
    } else if (targetName === 'email') {
      setData({
        ...data,
        email: targetValue,
      });
    } else if (targetName === 'linkedin') {
      setData({
        ...data,
        linkedin: targetValue,
      });
    } else if (targetName === 'github') {
      setData({
        ...data,
        github: targetValue,
      });
    } else if (targetName === 'color_palette') {
      setData({
        ...data,
        palette: targetValue,
      });
    }
  };

  return (
    <div className="page">
      <Header />
      <main className="main_grid">
        <Preview data={data} />
        <Form data={data} handleInput={handleInput} handleImage={handleImage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
