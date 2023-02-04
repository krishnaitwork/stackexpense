import React from "react";
import "./card.css";
import { useDispatch } from "react-redux";
import {
  deleteExpenses,
  editActive,
} from "../../features/expense/expenseSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ item, i, notifySuccess }) => {
  const navigate = useNavigate();

  const time = item.createdAt;
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteExpenses(item));
  };

  const handleEdit = () => {
    dispatch(editActive(item));
    navigate("/add-expense");
  };

  return (
    <div
      key={i}
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-image-container">
        <img
          src={item.category.icon}
          alt={item.category.title}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {item.amount}</label>
        </div>
        <div className="right">
        <div className="delete-icon" onClick={handleEdit}>
          <i className="fi fi-rr-edit"></i>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i className="fi-rr-trash"></i>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
