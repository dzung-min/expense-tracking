import ItemsList from "./ItemsList";

const ExpenseItems = ({ data }) => {
  return (
    <div>
      <ItemsList items={data} />
    </div>
  );
};

export default ExpenseItems;
