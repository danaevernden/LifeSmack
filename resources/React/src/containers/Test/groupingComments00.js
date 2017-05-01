/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {
  groupBy,
  values
} from 'lodash';


class GroupingComments00 extends React.Component{
  constructor(props){
    super(props)
    }

componentDidMount() {
  this.props.fetchNewsfeedFromActions();
}

render() {


/*const commentsByTask = this.props.comments.reduce((grouped, comment) => {
  const {task_id:taskId} = comment; //renames task_id to taskId, pulls task_id from comment
  grouped[taskId] = grouped[taskId] || []; // We are guaranteed to have an array
  grouped[taskId].push(comment);
  return grouped;
}, {});*/
//this does the same as above
const commentsByTask = groupBy(values(this.props.comments), (comment) => comment.task_id);

console.log('CommentsBYTask', this.props.comments, commentsByTask);

//this works
const commentsList = this.props.tasks.map((task) => {
  return (
    <div>
      <h2>{task.task_name}</h2>
      <ul>
        {(commentsByTask[task.task_id] || []).map((comment) => {
          return (<li>{comment.text}</li>);
        })}
      </ul>
    </div>
   );
});

const tasks = [{
  id: 1
}, {
  id: 2
}];

const comments = [{
  taskId: 1,
  text: 'Comment 1 (Task 1)'
}, {
  taskId: 2,
  text: 'Comment 2 (Task 2)'
}, {
  taskId: 1,
  text: 'Comment 2 (Task 1) '
},];


  // Reduce has two arguments
  // The first is  another function (confusing I know) that also has two arguments:
  //   the first argument, 'groupedComments', is eventually going to be your returned value from reduce,
  //   the second, 'comment', is the current element since reduce also iterates over each element in an array.
  // The second argument to reduce, is your starting value for 'groupedComments' which is going to be an object

  const commentsByTaskId = comments.reduce(function(groupedComments, comment) {
    // Pull out the taskId from the current comment
    const {taskId} = comment;

    // !This is a fancy JavaScript trick!
    // Set groupedComments[taskId] to groupedComments[taskId] unless
    // groupedComments[taskId] hasn't been set yet. In that case,
    // set it to an empty array. This is a nifty way to set a default value for an object
    // without overwriting if it's already set.
    groupedComments[taskId] = groupedComments[taskId] || [];

    // Now we know groupedComments[taskId] is an array so this next line is valid and won't error
    groupedComments[taskId].push(comment);

    // Return groupedComments to the next loop (You must always return your value being built in the reduce)
    return groupedComments;
  }, {});

  // Now we can map over the tasks and add in commnets
  const tasksWithComments = tasks.map(function(task){
  return Object.assign({},
  task, { comments:commentsByTaskId[task.id]
  });
});

const toHTMLElements = tasksWithComments.map((tasksWithComments) => {
  return(
    <div>
    <ul>
      {tasksWithComments.comments.map((comment) =>{
        return <li>{comment.text}</li>;
            })}
    </ul>
    </div>
  );
});

  return (
    <div className = 'App-page'>
        <div className = 'App-content'>
        {toHTMLElements}
        {commentsList}
        </div>
    </div>
  );
}

}

export default connect(
  mapStateToProps, mapDispatchToProps
)(GroupingComments00);
