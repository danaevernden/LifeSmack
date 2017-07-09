import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreMenu from 'material-ui/svg-icons/navigation/more-horiz';
import DropDownMenu from 'material-ui/DropDownMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

type Props = {
  sortOption: Number
}

const styles = {
  TaskListSortOptions: {
    marginTop: '-20px'
  },
  inlineBlock: {
    display: 'inline-block',
    marginBottom: '10px'
  },
}

class TaskListSortOptions extends React.Component {
  props:Props
  constructor(props){
    super(props)
    this.state= {
      sortOption: this.props.sortOption
    }
  }

  handleChange = (event, index, sortOption) => this.setState({sortOption});


  render() {
    const {
      sortOption
    } = this.props;

    return (
      <div style={styles.inlineBlock}>
        <MuiThemeProvider>
          <div style={styles.TaskListSortOptions}>
              Organize by:
            <DropDownMenu value={this.state.sortOption} onChange={this.handleChange}>
                 <MenuItem onClick={()=>this.sortOptionSelection("TvS")} value={1} primaryText="Task vs Supplemental" />
                 <MenuItem onClick={()=>this.sortOptionSelection("Date")} value={2} primaryText="Date" />
                 <MenuItem onClick={()=>this.sortOptionSelection("TaskType")} value={3} primaryText="Task Type" />
                 <MenuItem onClick={()=>this.sortOpetionSelection("EffortLevel")} value={4} primaryText="Effort Level" />
            </DropDownMenu>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TaskListSortOptions;
