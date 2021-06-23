import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const TitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  /*   const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  }); */

  //const { title, amount, date } = userInput;

  /*   const ChangeHandler = (name) => (event) => {
    const value = event.target.value;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }; */

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={TitleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            name="amount"
            value={amount}
            onChange={AmountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2025-12-31"
            name="date"
            value={date}
            onChange={DateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
