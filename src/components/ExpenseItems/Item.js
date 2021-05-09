import style from "./Item.module.css";

const Item = ({ expenseData }) => {
  const { date, title, amount } = expenseData;
  const dateObj = new Date(date);
  return (
    <div>
      <div className={style.expenseDate}>
        <div>{dateObj.toLocaleDateString("en-us", { month: "long" })}</div>
        <div>{dateObj.getFullYear()}</div>
        <div className={style.date}>{dateObj.getDate()}</div>
      </div>
      <div>
        <div>{title}</div>
        <div>{amount}</div>
      </div>
    </div>
  );
};

export default Item;
