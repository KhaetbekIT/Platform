import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Design from "../design";

const MapRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route index path={"/Platform/design/"} element={<Design />} />
      </Routes>
    </Fragment>
  );
};

export default MapRouter;
