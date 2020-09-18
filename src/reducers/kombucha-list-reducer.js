export default (state = {}, action) => {
  const { name, brand, flavor, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case "ADD_KOMBUCHA":
      return Object.assign({}, state, {
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
    case "DELETE_KOMBUCHA":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
