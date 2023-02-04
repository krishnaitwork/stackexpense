import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./card";
import "./expense-list.css";
const ExpenseList = () => {
  const {Expenses, searchquery } = useSelector((state) => state.expenses);
  const filteredList = Expenses.filter((item) => item.title.toLowerCase().includes(searchquery.toLowerCase()));

  const notifySuccess = () => toast.success("Expense Deleted!");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item,i) => (
          <Card item={item} key = {i} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="No Expenses"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty.</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
