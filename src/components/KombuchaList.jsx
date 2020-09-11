import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kombuchaList.map((kombucha, index) => (
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
KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
};
export default KombuchaList;
