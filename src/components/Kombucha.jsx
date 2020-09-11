import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
function Kombucha(props) {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Kombucha Name</th>
            <th scope="col">Kombucha Brand</th>
            <th scope="col">Flavor</th>
            <th scope="col">Price</th>
            <th scope="col">Alcohol Content</th>
          </tr>
        </thead>
        <tbody onClick={() => props.whenKombuchaClicked(props.id)}>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.flavor}</td>
          <td>{props.brand}</td>
          <td>{props.alcoholContent}</td>
          <td>{props.price}</td>
        </tbody>
      </table>
    </React.Fragment>
  );
}
Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.number,
  whenKombuchaClicked: PropTypes.func,
};
export default Kombucha;
