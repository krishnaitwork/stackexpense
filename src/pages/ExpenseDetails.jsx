import React from "react";
import { useSelector } from "react-redux";
import "./ExpenseDetails.css";

const ExpenseDetails = () => {
  const expenses = useSelector((state) => state.expense.Expenses);
  console.log(expenses);

  const rows = () =>
    expenses &&
    expenses.length > 0 &&
    expenses !== "undefined" &&
    expenses.map((expense, indexval) => (
      <tr key={indexval} style={{ textAlign: "left" }}>
        <td>{expense.desc}</td>
        <td>{expense.category}</td>
        <td>{expense.price}</td>
        <td>{expense.date}</td>
        <td>
          <button>Update</button>
        </td>
      </tr>
    ));

  return (
    <section>
      <h1>Fixed Table header</h1>
      <div className="tbl-header">
        <table border="0">
          <thead>
            <tr>
              <th>Desc</th>
              <th>Categories</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Modify</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table border="0">
          <tbody>{rows()}</tbody>
        </table>
      </div>
    </section>
  );
};

export default ExpenseDetails;
