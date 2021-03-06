import React from "react";
import PropTypes from "prop-types";

function Kombucha(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKombuchaClicked(props.id)}>
        <h2>
          {props.name} - {props.flavor} - {props.brand}
        </h2>
        <ul>
          <li>{props.price}</li>
          <li>{props.alcoholContent}</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  pints: PropTypes.number,
  whenKombuchaClicked: PropTypes.func,
};
export default Kombucha;
