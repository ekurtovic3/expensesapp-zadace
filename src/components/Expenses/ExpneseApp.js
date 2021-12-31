
import React, { useState,useEffect, useRef } from "react";
import "./../../App.css";
import Expenses from "./Expenses";
import FormDialog from "./FormDialog";
import Dropdown from "./Dropdown"
const ExpenseApp = (props) => {
  const [dialogOpen, setDialogOpen]=useState(false)
  //const [items, setItems] = useState( []);
  const [filter, setFilter] = useState([]);
 const inputRef=useRef();
/*  const key = "status";
const arrayUniqueByKey = [...new Map(items.map(item =>
  [item[key], item])).values()];
*/
  useEffect(() => {
  
      setFilter(props.items);

  }, []);

  const handleClose=()=>{
    setDialogOpen(false)
    inputRef.focus();
}
 const handleOpen=()=>{
   setDialogOpen(true)
   
 }

 const filterTitle=(title)=>{
   console.log(title)
   const pom = props.items.filter(order => order.title == title);
   setFilter(pom)
   console.log(filter)
 }
  
  return (
        <React.Fragment>
           <div className="new-expense-form" > 
           <Dropdown myfilter={filterTitle}  keyDrop={'title'} items={props.items}></Dropdown>
          <button  onClick={handleOpen}  ref={inputRef}  type="submit">Add New Expense</button>  
          </div>
        <FormDialog  open={dialogOpen} handleClose={handleClose} onAddExpenseData={props.addExpense}></FormDialog>
        <Expenses items={filter} />
        </React.Fragment>
  );
}
export default ExpenseApp;
