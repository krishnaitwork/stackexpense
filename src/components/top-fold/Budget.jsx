import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotalincome } from "../../features/expense/expenseSlice";
import "./budget.css";

const Budget = () => {
  const [incomeinput, setIncomeInput] = useState(true);
  const [amount, setAmount] = useState();
  const {Expenses, Totalincome} = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const amounts = Expenses?.map((transaction) => transaction.amount);

  const expense = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

//   const expense =
//     amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
//     -1;

  const moneyFormatter = (num) => {
    let p = parseFloat(num).toFixed(2).split(".");
    return (
      "₹ " +
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  };
const handleIncome = (e)=>{
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
    dispatch(setTotalincome(val));
}

  const handleEdit = () => {
    if (!incomeinput) {
      console.log("Set income");
    }
    setIncomeInput(false);
  };
  const handlesetIncome = () => {
    setIncomeInput(true);
  };

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        {incomeinput ? (
          <p className="money plus">
            {moneyFormatter(Totalincome)}
            <i className="fi fi-rr-edit" onClick={handleEdit}></i>
          </p>
        ) : (
            <>
          <input id="inc" value={amount}
          onChange={(e) => handleIncome(e)} />
           <i className="fi fi-rr-edit" onClick={() => handlesetIncome()}></i>
           </>
        )}
      </div>
      {/* <div className="right">
        </div> */}
      <div>
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};

export default Budget;
