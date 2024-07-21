function List(props) {
  const category = props.category;
  const itemList = props.items;
  itemList.sort((a, b) => a.name.localeCompare(b.name));
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}:{item.calories}
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}
export default List;
