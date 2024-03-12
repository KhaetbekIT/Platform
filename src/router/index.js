import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Design from "../design";

const MapRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/Platform/" index element={<h1>Home</h1>} />
        <Route path={"/Platform/design/"} element={<Design />} />
      </Routes>
    </Fragment>
  );
};

export default MapRouter;
