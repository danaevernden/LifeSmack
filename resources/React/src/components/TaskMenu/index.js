import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreMenu from 'material-ui/svg-icons/navigation/more-horiz';

class TaskMenu extends React.Component {

  render() {
    return (
      <IconMenu
           iconButtonElement={<FlatButton label="options" icon={<MoreMenu />}/>}
           anchorOrigin={{horizontal: 'left', vertical: 'top'}}
           targetOrigin={{horizontal: 'left', vertical: 'top'}}
         >
           <MenuItem primaryText="Delete Task" />
           <MenuItem primaryText="Schedule" />
      </IconMenu>
    );
  }
}

export default TaskMenu;
