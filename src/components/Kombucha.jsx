import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import KombuchaList from "./KombuchaList";
import KombuchaDetail from "./KombuchaDetail";
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
          <li>{props.id}</li>
        </ul>
        <button onClick={() => props.whenKombuchaClicked(props.id)}>lol</button>
      </div>
    </React.Fragment>
  );
}
Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKombuchaClicked: PropTypes.func,
};
export default Kombucha;
