// Fichero src/components/App.js
import { useState, useEffect } from "react";
import "../styles/app.scss";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import ls from "../services/localStorage";

function App() {
  const [data, setData] = useState({
    palette: "palette1",
    name: "",
    job: "",
    photo:
      "https://i1.wp.com/www.puntogeek.com/wp-content/uploads/2011/01/jabbascript.jpg?resize=527%2C348",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  });
  const handleImage = (imageData) => {
    setData({ ...data, photo: imageData });
  };

  useEffect(() => {
    ls.set("data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    setData(ls.get(data, data));
  }, []);

  const handleInput = (targetName, targetValue) => {
    if (targetName === "name") {
      setData({
        ...data,
        name: targetValue,
      });
    } else if (targetName === "job") {
      setData({
        ...data,
        job: targetValue,
      });
    } else if (targetName === "phone") {
      setData({
        ...data,
        phone: targetValue,
      });
    } else if (targetName === "email") {
      setData({
        ...data,
        email: targetValue,
      });
    } else if (targetName === "linkedin") {
      setData({
        ...data,
        linkedin: targetValue,
      });
    } else if (targetName === "github") {
      setData({
        ...data,
        github: targetValue,
      });
    } else if (targetName === "color_palette") {
      setData({
        ...data,
        palette: targetValue,
      });
    }
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header classHeader="header_index header" />
          <Landing />
        </Route>
        <Route path="/cards">
          <Header classHeader="header_cards header" />
          <main className="main_grid">
            <Preview data={data} />
            <Form
              data={data}
              handleInput={handleInput}
              handleImage={handleImage}
            />
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
