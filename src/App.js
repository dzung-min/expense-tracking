import { useState } from "react";
import { v4 } from "uuid";

import AddItemForm from "./components/AddItemForm";
import ExpenseItems from "./components/ExpenseItems";

const App = () => {
  const [items, setItems] = useState([
    {
      id: "e1",
      date: "2019-3-21",
      title: "Car Insurance",
      amount: 249,
    },
    {
      id: "e2",
      date: "2019-5-19",
      title: "Books",
      amount: 120,
    },
    {
      id: "e3",
      date: "2019-9-11",
      title: "Course",
      amount: 120,
    },
  ]);

  const handleSubmit = (date, title, amount) => {
    setItems((prevState) => [
      ...prevState,
      {
        id: v4(),
        title: title,
        amount: amount,
        date: date,
      },
    ]);
  };

  return (
    <div className="container">
      <AddItemForm onSubmitHandle={handleSubmit} />
      <ExpenseItems data={items} />
    </div>
  );
};

export default App;
