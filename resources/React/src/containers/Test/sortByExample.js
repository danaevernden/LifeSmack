import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { sortBy } from 'lodash';
import {ListItem} from 'material-ui/List';


//use this example:
//http://stackoverflow.com/questions/33542532/sort-mapped-list-with-lodash-on-reactjs

class sortByExample extends React.Component {
  constructor(props) {
    super(props);
  }


  sortBy(field) {
      this.setState({
        tasks: sortBy(this.state.tasks, field)
      })
  };


  render() {
    const listItems = this.props.tasks
    .map((tasks) =>
    <div>
        <ListItem primaryText={tasks.task_name} />
    </div>
  );
    return (
      <div>
          <FlatButton onClick={this.sortBy.bind(this, 'task_id')}>
              sort by id
          </FlatButton>
          <MuiThemeProvider>
          <div>
          {listItems}
          </div>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(sortByExample);
