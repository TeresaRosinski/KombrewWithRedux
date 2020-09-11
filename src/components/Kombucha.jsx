import React from "react";
import PropTypes from "prop-types";

function Kombucha(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKombuchaClicked(props.id)}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Kombucha Name</th>
              <th scope="col">Kombucha Brand</th>
              <th scope="col">Flavor</th>
              <th scope="col">Price</th>
              <th scope="col">Alcohol Content</th>
            </tr>
          </thead>
          <tbody>
            <td>{props.name}</td>
            <td>{props.flavor}</td>
            <td>{props.brand}</td>
            <td>{props.alcoholContent}</td>
            <td>{props.price}</td>
          </tbody>
        </table>
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
