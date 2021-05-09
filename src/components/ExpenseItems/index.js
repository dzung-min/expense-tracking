import ItemsList from "./ItemsList";

const ExpenseItems = () => {
  const data = [
    {
      id: "e1",
      date: "2019-3-21",
      title: "Car Insurance",
      amount: 249,
    },
    {
      id: "e2",
      date: "2019-5-19",
      title: "Programming Books",
      amount: 120,
    },
  ];

  return (
    <div>
      <ItemsList items={data} />
    </div>
  );
};

export default ExpenseItems;
