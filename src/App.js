import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Chair",
      amount: 1650,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 14250, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2950,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ]);

  const AddExpenseHandler = (expenseData) => {
    console.log(expenseData);
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
