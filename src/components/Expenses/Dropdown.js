import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const BasicSelect=(
    props
) =>{
  const [title, setTitle] = React.useState('');

 
  const handleChange = (event) => {
    setTitle(event.target.value);    
  };

  const handleFilter = (event) => {
    props.myfilter(title);
  };
 
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={title}
          label="Title"
          onChange={handleChange}
        >
        {props.items.map((expense) => (
       <MenuItem onClick={handleFilter} value={expense.title}>{expense.title}</MenuItem>

      ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;