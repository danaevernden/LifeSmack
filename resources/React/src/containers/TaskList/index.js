import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';


class TaskList extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      task: "",
      goal_id_filter: 1
    }

    this.updateFilter = this.updateFilter.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTaskToGoal = this.addTaskToGoal.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  updateTask(e) {
    this.setState({
      task: e.target.value
    })
  }

//calls connected prop addnewsitem from connect.js . sets state to wipe out name and task after adding
  addTaskToGoal() {
    //this is a dispatch
    this.props.addTaskToGoal(this.state.task);
    this.setState({
      task: ""
    })
  }

  render() {

    const listItems = this.props.goals
    //errors if filtering on tasks

    //get this to work - can't filter for goal_id = 1
  //  .filter((item) => {
  //    if (this.state.goal_id_filter) {
  //      return item.goal_id.startsWith(this.state.goal_id_filter);
  //    }
  //    return true;
  //  })
    .map((goals) =>
    <div>
    <div>{goals.task}</div>
    <br/>
    </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <h2>Goal: </h2>
                <input onChange={this.updateFilter} value={this.state.filter}/>
                <ul>{listItems}</ul>
                <div>
                  <div>
                    Task <input onChange={this.updateTask} value={this.state.task} />
                  </div>
                  <div>
                    <button onClick={this.addTaskToGoal}>Add</button>
                  </div>
                </div>
          </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
