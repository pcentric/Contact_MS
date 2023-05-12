import React from "react";
import { Charts } from "../components/Charts";
import Maps from "../components/Maps";

function MapsandCharts() {
  return (
    <div className="grid place-content-center m-auto mt-10">
      <Charts />
      <Maps />
    </div>
  );
}

export default MapsandCharts;
