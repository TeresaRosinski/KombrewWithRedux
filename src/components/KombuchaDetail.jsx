import React from "react";
import PropTypes from "prop-types";
import KombuchaList from "./KombuchaList";

function KombuchaDetail(props) {
  const { kombucha, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h2>Kombucha Details</h2>
      <h3>{kombucha.name}</h3>
      <h3>{kombucha.brand}</h3>
      <h3>{kombucha.flavor}</h3>
      <h3>{kombucha.price}</h3>
      <h3>{kombucha.alcoholContent}</h3>
      <h3>{kombucha.pints}</h3>
      <button onClick={() => onClickingDelete(kombucha.id)}>
        Drink a Pint
      </button>
    </React.Fragment>
  );
}
KombuchaDetail.propType = {
  kombucha: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default KombuchaDetail;
