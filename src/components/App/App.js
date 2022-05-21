//Importing 
import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

//Render the website with the below components
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
