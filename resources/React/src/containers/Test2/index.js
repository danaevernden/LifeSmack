/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import RaisedButton from 'material-ui/RaisedButton';

//2.19.2018 this works!!!!
class Test2 extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      name: "",
      task: ""
    }

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

  handleDeleteTask(task_Id) {
    const taskId = this.props.taskID;
    this.props.handleDeleteTask(task_Id)
    .then(() => {
      this.setState({
        deleteID: task_Id
      });
  });
  }

  render() {


    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
                <div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                    <button onClick={() =>this.handleDeleteTask(5)}>Add</button>
                  </div>
          </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test2);
//connect merges objects into one and passes it into newsfeed as props
