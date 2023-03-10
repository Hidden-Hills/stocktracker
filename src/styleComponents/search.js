import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchBar() {
    return (
    <div style={{textAlign: 'center', padding: '7px'}}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic"  label="Search Companies" variant="outlined" />
      </Box>
      </div>
    );
}
export default SearchBar;