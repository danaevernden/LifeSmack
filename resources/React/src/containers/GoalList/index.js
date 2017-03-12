import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';


class GoalList extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      goal_name: "",
      task: "",
      showTasks: false
    }

    this.updateFilter = this.updateFilter.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addGoalsTask = this.addGoalsTask.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  updateName(e) {
    this.setState({
      goal_name: e.target.value
    })
  }

  updateTask(e) {
    this.setState({
      task: e.target.value
    })
  }

//calls connected prop addnewsitem from connect.js . sets state to wipe out name and task after adding
  addGoalsTask() {
    //this is a dispatch
    this.props.addGoalsTask(this.state.goal_name, this.state.task);
    this.setState({
      goal_name: "",
      task: ""
    })
  }

  render() {

    //errors if filtering on tasks
    const listItems = this.props.goals.filter((item) => {
      if (this.state.filter) {
        return item.goal_name.startsWith(this.state.filter);
      }

      return true;
    })
    //fix this to map correctly
    .map((goals) =>
    <div>
    <a href={'/' + goals.goal_id}>{goals.goal_name}</a>
    <br/>
    </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <h2>Goals</h2>
                <input onChange={this.updateFilter} value={this.state.filter}/>
                <ul>{listItems}</ul>
                <div>
                  <div>
                    Goal Name <input onChange={this.updateName} value={this.state.goal_name} />
                  </div>
                  <div>
                    Task <input onChange={this.updateTask} value={this.state.task} />
                  </div>
                  <div>
                    <button onClick={this.addGoalsTask}>Add</button>
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
)(GoalList);
