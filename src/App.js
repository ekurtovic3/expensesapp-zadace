import React ,{useState,useEffect}from "react";
import "./App.css";
import Expense from "./components/Expenses/ExpneseApp";
import Expenses from "./components/Expenses/Expenses"
function App  ()  {
  const [items, setItems] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      status: "Delivered"
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12),
    status: "Delivered" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      status: "ODD"
    },
    { id: "e4", title: "New Desk", amount: 450, date: new Date(2021, 5, 12) ,
    status: "Delivered"}]);


    const addExpense =(expense)=>{
      //setDialogOpen(false)
      const expenseData = {
        id: "e5",
      title: String (expense.title),
      amount: +expense.amount,
      date: new Date(expense.date),
      status: String (expense.status)
    };
    const newList= [...items,expenseData];
    console.log(expenseData)
    console.log(newList)

    setItems(result => [...items, expenseData]);
    console.log(items)
    
  };
  return (
    <div className="App">
     <Expense items={items} addExpense={addExpense}></Expense>
     
    </div>
  );
}
export default App;