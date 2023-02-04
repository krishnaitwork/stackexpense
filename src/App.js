import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Charts from './components/Charts';
import Expenses from './components/Expenses';
import ExpenseDetails from './pages/ExpenseDetails';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {ToastContainer} from 'react-toastify'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import AddExpense from './pages/add-expense/AddExpense';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/add-expense" element={<AddExpense/>} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </BrowserRouter>
    
    // <div className="App">
    //   <div className='AppGlass'>
    //   <Charts/>
    //   <Expenses/>
    //   <ExpenseDetails/>
    //   </div>

    // </div>
  );
}

export default App;
