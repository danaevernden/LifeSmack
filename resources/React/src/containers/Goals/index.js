import { connect } from 'react-redux';
import React from 'react';
import GoalNames from '../../components/GoalNames'; //change
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';

class GoalList extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      goal_name: "",
      task: ""
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
      name: e.target.value
    })
  }

  updateTask(e) {
    this.setState({
      task: e.target.value
    })
  }

//calls connected prop addnewsitem from connect.js . sets state to wipe out name and task after adding
  addNewsItem() {
    //this is a dispatch
    this.props.addGoalsTask(this.state.name, this.state.task);
    this.setState({
      name: "",
      task: ""
    })
  }

  render() {

    const listItems = this.props.goals.filter((item) => {
      if (this.state.filter) {
        return item.task.startsWith(this.state.filter);
        //item.name === this.state.filter
      }

      return true;
    })
    .map((goals) =>
    <li>{goals.goal_name}
      <li> {goals.task} </li>
    </li>
    );

    return (
      <div className = 'App-page'>
          <Homepage/>
          <div className = 'App-content'>
              <h2>Goals</h2>
                <input onChange={this.updateFilter} value={this.state.filter}/>
                <ul>{listItems}</ul>
                <hr />
                <div>
                  <div>
                    Goal Name <input onChange={this.updateName} value={this.state.name} />
                  </div>
                  <div>
                    Task <input onChange={this.updateTask} value={this.state.task} />
                  </div>
                  <div>
                    <button onClick={this.addGoalsItem}>Add</button>
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
