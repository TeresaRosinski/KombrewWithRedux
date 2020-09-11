import React from "react";
import { v4 } from "uuid";

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
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.flavor.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.price.value);
  }
}
export default NewKombuchaForm;
