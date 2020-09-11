import React from "react";
import NewKombuchaForm from "./NewKombuchaForm"; //Kombucha is the parent to both form and list=== we need to import both here
import KombuchaList from "./KombuchaList";

class KombuchaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombuchaList: [],
    };
  }
  handleAddingNewKombuchaToList = (newKombucha) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(
      newKombucha
    );
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false,
    });
  };

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let addKombuchaButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKombuchaForm
          onNewKombuchaCreation={this.handleAddingNewKombuchaToList}
        />
      );
      buttonText = "See All Kombucha Kegs";
    } else {
      currentlyVisibleState = (
        <KombuchaList kombuchaList={this.state.masterKombuchaList} />
      );
      buttonText = "Add Kombucha Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-light" onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}
export default KombuchaControl;
