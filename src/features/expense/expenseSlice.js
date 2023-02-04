import { createSlice } from "@reduxjs/toolkit";
import { appendToStorage, localStorage_Enum } from "../../helper/services";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    Expenses:
      JSON.parse(localStorage.getItem(localStorage_Enum.Expenses)) || [],
    editing: {},
    Totalincome: parseFloat(localStorage.getItem(localStorage_Enum.TotalIncome)) || 0,
    searchquery: "",
    Categories: [
      {
        type: "Savings",
        color: "#f9c74f",
        percent: 45,
      },
      {
        type: "Investment",
        color: "#f9c74f",
        percent: 20,
      },
      {
        type: "Expense",
        color: "rgb(54, 162, 235)",
        percent: 10,
      },
    ],
    InitialLoad: false,
  },
  reducers: {
    getAllExpenses: (state, action) => {
      state.Expenses =
        JSON.parse(localStorage.getItem(action.payload.Position)) || [];
      state.InitialLoad = true;
    },
    addExpenses: (state, action) => {
      state.Expenses.push(action.payload);
      appendToStorage(localStorage_Enum.Expenses, action.payload);
    },
    setTotalincome: (state, action) => {
      state.Totalincome = action.payload;
      localStorage.setItem(localStorage_Enum.TotalIncome, action.payload);
    },
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state) => {
      state.editing = {};
    },
    updateExpenses: (state, action) => {
      const updateddata = state.Expenses.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      state.Expenses = updateddata;
      localStorage.setItem(localStorage_Enum.Expenses, JSON.stringify(updateddata));
    },
    deleteExpenses: (state, action) => {
      const filteredlist = state.Expenses.filter(
        (x) => x.id !== action.payload.id
      );
      state.Expenses = filteredlist;
      localStorage.setItem(localStorage_Enum.Expenses, JSON.stringify(filteredlist));
    },
    searchExpense: (state, action) => {
      state.searchquery = action.payload;
    },
  },
});

export const {
  getAllExpenses,
  addExpenses,
  updateExpenses,
  deleteExpenses,
  searchExpense,
  editActive,
  editInActive,
  setTotalincome,
} = expenseSlice.actions;

export default expenseSlice.reducer;
