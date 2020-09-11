import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKombuchaForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <input type="text" name="name" placeholder="Kombucha Name" />
        <input type="text" name="brand" placeholder="Kombucha Brand" />
        <input type="text" name="flavor" placeholder="Kombucha Flavor" />
        <input type="number" name="price" placeholder="Price Per Pint" />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content"
        />
        <button type="submit">Add Me</button>
      </form>
    </React.Fragment>
  );

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
    });
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.flavor.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.price.value);
  }
}
NewKombuchaForm.propTypes = { onNewKombuchaCreation: PropTypes.func };
export default NewKombuchaForm;
