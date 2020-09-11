import React from "react";
import PropTypes from "prop-types";

function KombuchaDetail(props) {
  const { kombucha } = props;
  return (
    <React.Fragment>
      <h2>Kombucha Details</h2>
      <h3>{kombucha.name}</h3>
      <h3>{kombucha.brand}</h3>
      <h3>{kombucha.flavor}</h3>
      <h3>{kombucha.price}</h3>
      <h3>{kombucha.alcoholContent}</h3>
    </React.Fragment>
  );
}
KombuchaDetail.propType = {
  kombucha: PropTypes.object,
};

export default KombuchaDetail;
