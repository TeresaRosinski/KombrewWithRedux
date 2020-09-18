<table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Kombucha Name</th>
      <th scope="col">Kombucha Brand</th>
      <th scope="col">Flavor</th>
      <th scope="col">Price</th>
      <th scope="col">Alcohol Content</th>
    </tr>
  </thead>
  <tbody onClick={() => props.whenKombuchaClicked(props.id)}>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.flavor}</td>
    <td>{props.brand}</td>
    <td>{props.alcoholContent}</td>
    <td>{props.price}</td>
  </tbody>
</table>;

{
  props.kombuchaList.map((kombucha) => (
    <tbody>
      <td>{kombucha.id}</td>
      <td>{kombucha.name}</td>
      <td>{kombucha.flavor}</td>
      <td>{kombucha.brand}</td>
      <td>{kombucha.alcoholContent}</td>
      <td>{kombucha.price}</td>
    </tbody>
  ));
}
function decrementPints(){
  const kombuchaList = this.state.kombuchaList;
  const kombucha = kombucha.find((k => k.id === props.kombucha.id));
  const decrementedKombucha = kombucha; 
  decrementedKombucha.pints -=1;
  // get your state: this is the kombucha list
  // change the list: Find the kombucha to decrement, use spread operator to create a new list with your updated kombucha 
  this.setState({
 // set state with updated kombucha list
   kombuchaList: [...kombuchaList.filter((k => k.id === props.kombucha.id)), decrementedKombucha]
  })