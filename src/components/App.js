// Fichero src/components/App.js
import { useState } from 'react';
import '../styles/app.scss';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import {  Route, Switch } from 'react-router-dom';
import Landing from './Landing';

function App() {
  const [data, setData] = useState({
    palette: 'palette1',
    name: '',
    job: '',
    image: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });

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
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/cards'>
          <main className="main_grid">
            <Preview data={data} />
            <Form data={data} handleInput={handleInput} />
          </main>
        </Route>
        <Route>
          <h2>Página no encontrada.</h2>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
