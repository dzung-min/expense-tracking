import style from "./Item.module.css";

const Item = ({ expenseData }) => {
  const { date, title, amount } = expenseData;
  const dateObj = new Date(date);
  return (
    <div className={style["item-warper"]}>
      <div className={style.expenseDate}>
        <div>{dateObj.toLocaleDateString("en-us", { month: "long" })}</div>
        <div>{dateObj.getFullYear()}</div>
        <div className={style.date}>{dateObj.getDate()}</div>
      </div>
      <div className={style.description}>
        <div className={style.title}>{title}</div>
        <div className={style.amount}>${amount}</div>
      </div>
    </div>
  );
};

export default Item;
