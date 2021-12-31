
import React, { useState ,useRef,useEffect} from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import "./../NewExpense/ExpenseForm.css";


const FormDialog = (
{onAddExpenseData,
  open,
  handleClose,
}
) => {
  const [disable,setDisable]=useState(true);
  const count = useRef(0)
  const [object, setObject] = useState({title:'',amount:'',date:'',status:''});
 

  const handleChange = (event) => {
 ;
    if(object.title==='' || (object.title===object.status) || object.status==='') 
    {setDisable(true)
    
    }
    else setDisable(false)
    
    setObject({ ...object, [event.target.name]: event.target.value });
  };

  const handleSubmit =()=> (event)=>{  
    onAddExpenseData(object); 
  };

  /*const handleClickOpen = () => {
    setOpen(true);
  };
*/useEffect(() => {
  count.current = count.current + 1;
});

  
  return (
  
      <React.Fragment> 
      <Dialog    open={open} onClose={handleClose}>
        <DialogContent className="new-expense" >
     <form >
     <h1>Render Count: {count.current}</h1>


        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
             
              type="text"
              name='title'
              value={object.title}
              onChange={handleChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              name='amount'
              value={object.amount || 1}
              onChange={handleChange}
             
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              name='date'
              value={object.date}
              onChange={handleChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Order status</label>
            <input
              type="text"
              name='status'
              value={object.status}
              onChange={handleChange}
            />
          </div>

        </div>
        
        <div className="new-expense__actions">
          <button  disabled={disable} style={{  textDecoration: disable ? 'line-through' : 'none'}}  type="submit" onClick={handleSubmit()}>Add Expense</button>
        </div>
      </form>
        </DialogContent>
      
      </Dialog>
    </React.Fragment>
  );
}
export default FormDialog 