import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreMenu from 'material-ui/svg-icons/navigation/more-horiz';
import DropDownMenu from 'material-ui/DropDownMenu';
class TaskListSortOptions extends React.Component {

  render() {
    const {
      sortOption
    } = this.props;
    return (
      <div>Organize by:
      <DropDownMenu>
           <MenuItem onClick={this.sortOptionSelection} primaryText="Parent task" />
           <MenuItem onClick={this.sortOptionSelection} primaryText="Date" />
           <MenuItem onClick={this.sortOptionSelection} primaryText="Task vs Supplemental" />
      </DropDownMenu>
      </div>
    );
  }
}

export default TaskListSortOptions;
