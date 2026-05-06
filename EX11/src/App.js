import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '50px', color: 'red' }}>hello CGU!!</h1>

      <div>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        
        <IconButton color="primary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
        <IconButton color="primary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default App;