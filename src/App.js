import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  /*   const expenses = [
    {
      id: "e1",
      title: "Newspaper",
      amount: 94,
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
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; */

  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Newspaper",
      amount: 94,
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
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expenseData) => {
    setExpenses([...expenses, expenseData]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
