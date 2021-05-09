import Item from "./Item";
import style from "./Item.module.css";

const ItemsList = ({ items }) => {
  return items.length !== 0 ? (
    <>
      {items.map((item) => (
        <Item key={item.id} expenseData={item} />
      ))}
    </>
  ) : (
    <>
      <div className={`${style["item-warper"]} ${style["no-item"]}`}>
        No Item Found
      </div>
    </>
  );
};

export default ItemsList;
