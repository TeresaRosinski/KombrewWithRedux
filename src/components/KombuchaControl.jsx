import React from "react";
import NewKombuchaForm from "./NewKombuchaForm"; //Kombucha is the parent to both form and list=== we need to import both here
import KombuchaList from "./KombuchaList";
import KombuchaDetail from "./KombuchaDetail";
import { connect } from "react-redux";
import PropType from "prop-types";

class KombuchaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKombucha: null,
    };
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_KOMBUCHA",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedKombucha: null });
  };

  handleDeletingPint = (id) => {
    const updatedKombuchaList = this.state.masterKombuchaList.map(
      (kombucha) => {
        if (kombucha.id === id && kombucha.pints > 0) {
          kombucha.pints -= 1;
        }
        return kombucha;
      }
    );

    this.setState({
      masterKombuchaList: updatedKombuchaList,
      selectedKombucha: this.state.selectedKombucha,
    });
  };

  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.props.masterKombuchaList[id];
    this.setState({ selectedKombucha: selectedKombucha });
  };

  handleAddingNewKombuchaToList = (newKombucha) => {
    const { dispatch } = this.props;
    const {
      id,
      name,
      brand,
      flavor,
      alcoholContent,
      price,
      pints,
    } = newKombucha;
    const action = {
      type: "ADD_KOMBUCHA",
      id: id,
      name: name,
      brand: brand,
      flavor: flavor,
      alcoholContent: alcoholContent,
      price: price,
      pints: pints,
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  handleClick = () => {
    if (this.state.selectedKombucha != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKombucha: null,
      });
    }
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKombucha != null) {
      currentlyVisibleState = (
        <KombuchaDetail
          kombucha={this.state.selectedKombucha}
          onClickingDeletePint={this.handleDeletingPint}
          onClickingDeleteKeg={this.handleDeletingKeg}
        />
      );
      buttonText = "Return to Kombucha List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKombuchaForm
          onNewKombuchaCreation={this.handleAddingNewKombuchaToList}
        />
      );
      buttonText = "See All Kombucha Kegs";
    } else {
      currentlyVisibleState = (
        <KombuchaList
          kombuchaList={this.props.masterKombuchaList}
          onKombuchaSelection={this.handleChangingSelectedKombucha}
        />
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
KombuchaControl.PropTypes = {
  masterKombuchaList: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    masterKombuchaList: state,
  };
};
KombuchaControl = connect(mapStateToProps)(KombuchaControl);
export default KombuchaControl;
