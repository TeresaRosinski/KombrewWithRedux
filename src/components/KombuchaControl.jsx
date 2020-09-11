import React from "react";
import NewKombuchaForm from "./NewKombuchaForm"; //Kombucha is the parent to both form and list=== we need to import both here
import NewKombuchaList from "./KombuchaList";

class KombuchaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }
  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm />;
    } else {
      currentlyVisibleState = <KombuchaList />;
      addKombucha = <button onClick={this.handleClick}>Add Kombucha</button>;
    }
    return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
  }
}
export default KombuchaControl;
