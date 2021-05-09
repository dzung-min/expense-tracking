const Item = ({ expenseData }) => {
  const { date, title, amount } = expenseData;
  return (
    <div>
      <div>{date}</div>
      <div>{title}</div>
      <div>{amount}</div>
    </div>
  );
};

export default Item;
