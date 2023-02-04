import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./top-fold.css";
import { useDispatch } from "react-redux";
import {
  editInActive,
  searchExpense,
} from "../../features/expense/expenseSlice";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  const navigate = useNavigate();
  const handleInitForm = () => {
    dispatch(editInActive());
    navigate("/add-expense");
  };
  const handleResetForm = () => {
    dispatch(editInActive());
    navigate("/");
  };

  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi-rr-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <div className="add-button" onClick={handleInitForm}>
            <i className="fi-rr-add"></i>
            <label>Add</label>
          </div>
        </div>
      ) : (
        <div className="add-topfold">
          <div className="add-topfold-button" onClick={handleResetForm}>
            <i className="fi-rr-angle-left"></i>
            <label>Back</label>
          </div>
          <div className="add-topfold-button" onClick={handleResetForm}>
            <i className="fi-rr-cross-circle"></i>
            <label>Cancel</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
