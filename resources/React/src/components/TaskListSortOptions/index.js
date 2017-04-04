import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreMenu from 'material-ui/svg-icons/navigation/more-horiz';

class TaskListSortOptions extends React.Component {

  render() {
    const {
      sortOptionSelection
    } = this.props;
    return (
      <IconMenu
           iconButtonElement={<IconButton><MoreMenu /></IconButton>}
           anchorOrigin={{horizontal: 'left', vertical: 'top'}}
           targetOrigin={{horizontal: 'left', vertical: 'top'}}
         >
           <MenuItem onClick={this.sortOptionSelection} primaryText="Parent task" />
           <MenuItem onClick={this.sortOptionSelection} primaryText="Date" />
           <MenuItem onClick={this.sortOptionSelection} primaryText="Task vs Supplemental" />
      </IconMenu>
    );
  }
}

export default TaskListSortOptions;
