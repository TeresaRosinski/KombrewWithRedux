import React from "react";
import PropTypes from "prop-types";

function Kombucha() {
  return (
    <React.Fragment>
      <h3>
        {props.name} - {props.flavor} - {props.brand}
      </h3>
      <h4>{props.alcoholContent}</h4>
      <h4>{props.price}</h4>
    </React.Fragment>
  );
}
Kombucha.PropTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
};
export default Kombucha;
