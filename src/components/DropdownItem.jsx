import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const styles = {
    fontFamily: 'Signika Negative',
    color: "#fff",
    textTransform: 'capitalize',
    fontSize: '1rem'
}

// The following DropdownItem code was adapted from the Material-UI website

function DropdownItem(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="nav-item"
        style={styles}
      >
        Creatures
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem 
            style={{color: "rgb(0, 28, 73)", fontFamily: 'Signika Negative'}} 
            onClick={() => {props.updateDisplay("creatures"); props.updateCType("food")}}>
            Food
        </MenuItem>

        <MenuItem 
            style={{color: "rgb(0, 28, 73)", fontFamily: 'Signika Negative'}} 
            onClick={() => {props.updateDisplay("creatures"); props.updateCType("non_food")}}>
            Non-food
        </MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownItem;