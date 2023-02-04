import React from "react";
import ExpenseList from "../../components/expense-list/ExpenseList";
import Budget from "../../components/top-fold/Budget";
import TopFold from "../../components/top-fold/TopFold";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Budget/>
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
