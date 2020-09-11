import React from "react";
import NewKombuchaForm from "./NewKombuchaForm"; //Kombucha is the parent to both form and list=== we need to import both here
import KombuchaList from "./KombuchaList";

class KombuchaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState({ forVisibleOnePage: true });
  };
  render() {
    let currentlyVisibleState = null;
    let addKombuchaButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm />;
    } else {
      currentlyVisibleState = <KombuchaList />;
      addKombuchaButton = (
        <button onClick={this.handleClick}>Add Kombucha</button>
      );
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKombuchaButton}
      </React.Fragment>
    );
  }
}
export default KombuchaControl;
