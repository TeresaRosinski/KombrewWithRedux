import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKombuchaForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Kombucha Name</label>
              </td>
              <td>
                <input type="text" name="name" placeholder="Kombucha Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Kombucha Brand</label>
              </td>
              <td>
                <input type="text" name="brand" placeholder="Kombucha Brand" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Flavor</label>
              </td>
              <td>
                <input
                  type="text"
                  name="flavor"
                  placeholder="Kombucha Flavor"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Price</label>
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  placeholder="Price Per Pint"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Alcohol Content</label>
              </td>
              <td>
                <input
                  type="number"
                  name="alcoholContent"
                  placeholder="Alcohol Content"
                />
              </td>
            </tr>
            <button type="submit" className="btn btn-light">
              Add Me
            </button>
          </tbody>
        </table>
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
