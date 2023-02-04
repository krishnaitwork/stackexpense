import React, { useEffect, useState } from "react";
import { categories } from "../../constants/add-expense";
import "react-toastify/dist/ReactToastify.css";
import "./add-form.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addExpenses, editInActive, updateExpenses } from "../../features/expense/expenseSlice";

const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [editMode, setEditMode] = useState(false);

  const { editing } = useSelector((state) => state.expenses) || {};

  // listen for edit mode active
  useEffect(() => {
    const { id, title, amount, category } = editing || {};
    if (id) {
      setEditMode(true);
      setID(id);
      setTitle(title);
      setCategory(category);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  const reset = () => {
    setTitle("");
    setCategory("");
    setAmount("");
  };

  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
    console.log(category);
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      return;
    }
    if (editMode) {
      const editdata = {
        id,
        title,
        amount,
        category,
        createdAt: new Date().toLocaleString(),
      };
      dispatch(updateExpenses(editdata));
      navigate("/");
      const notifysuccess = () => toast("Expense updated");
      notifysuccess();
      setEditMode(false);
      reset();
      dispatch(editInActive());
      return;
    }
    const data = {
      id: nanoid(),
      title,
      amount,
      category,
      createdAt: new Date().toLocaleString(),
    };
    dispatch(addExpenses(data));
    navigate("/");
    const notifysuccess = () => toast("Expense added");
    notifysuccess();
    setEditMode(false);
    reset();
    // setModalOpen(!modalOpen);
  };

  const handleCancel = () => {
    setEditMode(false);
    reset();
    dispatch(editInActive());
    navigate("/");
  };

  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter Amount"
          className="amount-input"
          onChange={(e) => handleAmount(e)}
          value={amount}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i className="fi-rr-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>{editMode ? "Update" : "Add"}</label>
          <i className="fi-rr-paper-plane"></i>
        </div>
        {editMode && (
          <div style={{ marginLeft: "1rem" }} onClick={handleCancel}>
            <label>Cancel</label>
            <i className="fi-rr-paper-plane"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddForm;
