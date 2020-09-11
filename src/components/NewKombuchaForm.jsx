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
      </form>
    </React.Fragment>
  );
}
export default NewKombuchaForm;
