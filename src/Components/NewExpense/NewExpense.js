import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);

  const HideFormHandler = () => {
    setShowForm(false);
  };

  const ShowFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={ShowFormHandler}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm onSaveData={saveDataHandler} onCancel={HideFormHandler} />
      )}
    </div>
  );
};

export default NewExpense;
