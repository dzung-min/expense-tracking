import { useState } from "react";

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

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandle(date.value, amount.value, date.value);
          resetTitle();
          resetAmount();
          resetDate();
        }}
      >
        <div>
          <label htmlFor="title">Item title</label>
          <input type="text" id="title" {...title} />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" {...amount} />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" {...date} />
        </div>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default AddItemForm;
