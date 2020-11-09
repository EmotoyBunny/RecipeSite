import React, {Component} from "react";

// Компоненты js
import Head from "./ComponentsJsx/Head.jsx";
import Footer from "./ComponentsJsx/Footer.jsx";

class App extends Component {
  render() {
    return (
        <div>
          <Head />
          <Footer />
        </div>
    );
  }
}

export default App;
