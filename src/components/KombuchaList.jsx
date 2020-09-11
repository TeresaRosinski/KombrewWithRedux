import React from "react";
import Kombucha from "./Kombucha";

function KombuchaList() {
  return (
    <React.Fragment>
      <hr />
      {masterKombuchaList.map((kombucha, index) => (
        <Kombucha
          name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          alcoholContent={kombucha.alcoholContent}
          flavor={kombucha.flavor}
        />
      ))}
    </React.Fragment>
  );
}
export default KombuchaList;
