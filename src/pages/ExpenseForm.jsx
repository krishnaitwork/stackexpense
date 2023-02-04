import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Stack,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { addExpenses } from "../features/expense/expenseSlice";
import "./expenseForm.css";
import { useDispatch, useSelector } from "react-redux";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense);

  var date = new Date();
  const [data, setData] = useState({
    desc: "",
    category: "",
    price: "",
    date: "",
  });

  const handleChange = (event, fieldname) => {
    setData({ ...data, [fieldname]: event.target.value });
  };

  const resetData = () => {
    setData({
      desc: "",
      category: "",
      price: "",
      date: "",
    });
  };

  const AddIncome = (e) => {
    e.preventDefault();

    if (data.desc.trim() == "" || data.price.trim() == "") {
      // toast.error("User Input is required !!");
      return;
    }
    console.log("data date ", data.date);

    let d = data.date.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
    data.date = newD.toLocaleString();
    dispatch(addExpenses(data));

    var datamodal = [];
    resetData();
  };

  return (
    <div className="cardshadow">
      <form onSubmit={AddIncome}>
        <div className="formItem">
          <input
            id="desc"
            className="formInput"
            type="text"
            placeholder="Income Description..."
            onChange={(e) => handleChange(e, "desc")}
            value={data.desc}
          />
        </div>
        <div className="formItem">
          <select
            id="category"
            className="formInput"
            onChange={(e) => handleChange(e, "category")}
          >
            {expenses.Categories.map((option, i) => (
              <option key={i} value={option.type}>
                {option.type}
              </option>
            ))}
          </select>
        </div>
        <div className="formItem">
          <input
            id="price"
            className="formInput"
            type="number"
            placeholder="price..."
            onChange={(e) => handleChange(e, "price")}
            value={data.price}
          />
        </div>
        <div className="formItem">
          <input
            className="formInput"
            type="date"
            name="date"
            id="date"
            placeholder="Income date..."
            onChange={(e) => handleChange(e, "date")}
            value={data.date}
          />
        </div>
        <button
          // disabled={user.pending}
          className="updateButton"
          onClick={AddIncome}
        >
          Submit
        </button>
        {/* {user.error && <span className="error">Something went wrong!</span>}
    {user.pending === false && (
      <span className="success">Account has been updated!</span>
    )} */}
      </form>
    </div>
  );
};

export default ExpenseForm;
