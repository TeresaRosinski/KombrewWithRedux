import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kombuchaList.map((kombucha) => (
        <Kombucha
          whenKombuchaClicked={props.onKombuchaSelection}
          name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          alcoholContent={kombucha.alcoholContent}
          flavor={kombucha.flavor}
          id={kombucha.id}
          key={kombucha.key}
        />
      ))}
    </React.Fragment>
  );
}
KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  onKombuchaSelection: PropTypes.func,
};
export default KombuchaList;
