import React, { useState } from "react";

import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const FilteredYearHandler = (year) => {
    setFilteredYear(year);
  };

  /*   const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === parseInt(filteredYear)
  ); */

  const filteredExpenses =
    filteredYear === "All"
      ? [...props.items]
      : props.items.filter(
          (item) => item.date.getFullYear() === parseInt(filteredYear)
        );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilteredYear={FilteredYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
