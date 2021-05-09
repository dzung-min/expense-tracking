import { useState } from "react";
import { v4 } from "uuid";

import AddItemForm from "./components/AddItemForm";
import Chart from "./components/Chart";
import ExpenseItems from "./components/ExpenseItems";
import Filter from "./components/Filter";

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

  const [displayItems, setDisplayItems] = useState(items);

  const handleFilter = (year) => {
    const newDisplayItems = items.filter((item) => item.date.includes(year));
    setDisplayItems(newDisplayItems);
  };

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
      <Filter onSelectFilter={handleFilter} />
      <Chart chartData={displayItems} />
      <ExpenseItems data={displayItems} />
    </div>
  );
};

export default App;
