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
