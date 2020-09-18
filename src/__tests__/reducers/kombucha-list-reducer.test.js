import kombuchaListReducer from "../../reducers/kombucha-list-reducer";

describe("kombuchaListReducer", () => {
  const currentState = {
    1: {
      name: "Cosmic Cranberry",
      brand: "Intergallactic Bacteria",
      flavor: "Cranberry",
      price: "5",
      alcoholContent: "5",
      pints: 127,
      id: 1,
    },
    2: {
      name: "Sailin Strawberry",
      brand: "Intergallactic Bacteria",
      flavor: "Strawberry",
      price: "5",
      alcoholContent: "5",
      pints: 127,
      id: 1,
    },
  };
  let action;
  const kombuchaData = {
    name: "Cosmic Cranberry",
    brand: "Intergallactic Bacteria",
    flavor: "Cranberry",
    price: "5",
    alcoholContent: "5",
    pints: 127,
    id: 1,
  };

  test("Should successfully add new kombucha data to masterKombuchaList", () => {
    const {
      name,
      brand,
      flavor,
      price,
      alcoholContent,
      pints,
      id,
    } = kombuchaData;
    action = {
      type: "ADD_KOMBUCHA",
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id,
    };
    expect(kombuchaListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id,
      },
    });
  });
  test("Should Successfully delete a Pint of Kombucha", () => {
    action = {
      type: "DELETE_KOMBUCHAPINT",
      id: 1,
    };
    expect(kombuchaListReducer(currentState, action)).toEqual({
      2: {
        name: "Sailin Strawberry",
        brand: "Intergallactic Bacteria",
        flavor: "Strawberry",
        price: "5",
        alcoholContent: "5",
        pints: 126,
        id: 1,
      },
    });
  });
});

test("Should return default state if there is no action type passed into the reducer", () => {
  expect(kombuchaListReducer({}, { type: null })).toEqual({});
});
