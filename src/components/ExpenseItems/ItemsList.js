import Item from "./Item";

const ItemsList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} expenseData={item} />
      ))}
    </>
  );
};

export default ItemsList;
