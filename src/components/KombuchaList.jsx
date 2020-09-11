import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props) {
  return (
    <React.Fragment>
      <hr />

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
        {props.kombuchaList.map((kombucha) => (
          <tbody>
            <td>{kombucha.id}</td>
            <td>{kombucha.name}</td>
            <td>{kombucha.flavor}</td>
            <td>{kombucha.brand}</td>
            <td>{kombucha.alcoholContent}</td>
            <td>{kombucha.price}</td>
          </tbody>
        ))}
      </table>
    </React.Fragment>
  );
}
KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  onKombuchaSelection: PropTypes.func,
};
export default KombuchaList;
