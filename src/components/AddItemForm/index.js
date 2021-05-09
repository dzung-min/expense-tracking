import { useState } from "react";

import InputWithLabel from "./InputWithLabel";
import style from "./index.module.css";

const AddItemForm = ({ onSubmitHandle }) => {
  const useValue = (initalValue) => {
    const [value, setValue] = useState(initalValue);
    return [
      {
        value: value,
        onChange: (e) => setValue(e.target.value),
      },
      () => setValue(initalValue),
    ];
  };

  const [title, resetTitle] = useValue("");
  const [amount, resetAmount] = useValue("");
  const [date, resetDate] = useValue("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmitHandle(date.value, title.value, amount.value);
    resetTitle();
    resetAmount();
    resetDate();
  };

  return (
    <form onSubmit={onHandleSubmit} className={style["form-container"]}>
      <div className={style["input-container"]}>
        <InputWithLabel id="title" label="Item title" value={title} />
        <InputWithLabel id="amount" label="Amount" value={amount} />
        <InputWithLabel id="date" type="date" label="Date" value={date} />
      </div>
      <button>Add Expense</button>
    </form>
  );
};

export default AddItemForm;
