import AddItemForm from "./components/AddItemForm";
import ExpenseItems from "./components/ExpenseItems";

const App = () => {
  return (
    <div className="container">
      <AddItemForm />
      <ExpenseItems />
    </div>
  );
};

export default App;
