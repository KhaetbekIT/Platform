import { Fragment } from "react";
import "@styles/base.scss";
import { Helmet } from "react-helmet";
import MapRouter from "./router";
import { Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Platform</title>
      </Helmet>
      <header>
        <Link to={"/Platform/design/"}>Design</Link>
      </header>
      <MapRouter />
    </Fragment>
  );
}

export default App;
