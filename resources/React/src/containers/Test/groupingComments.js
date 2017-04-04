/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';



class GroupingComments extends React.Component{
  constructor() {
    super()
  }
render() {

  const tasksInline = [{
    task_id: 1,
    task_name: 'task 1'
  }, {
    task_id: 2,
    task_name: 'task 2'
  }]

  const commentsInline = [{
    task_id: 1,
    text: 'Comment 1 (Task 1)'
  }, {
    task_id: 2,
    text: 'Comment 2 (Task 2)'
  }, {
    task_id: 1,
    text: 'Comment 2 (Task 1) '
  }];
  // Reduce has two arguments
  // The first is another function (confusing I know) that also has two arguments:
  //   the first argument, 'groupedComments', is eventually going to be your returned value from reduce,
  //   the second, 'comment', is the current element since reduce also iterates over each element in an array.
  // The second argument to reduce, is your starting value for 'groupedComments' which is going to be an object

  const commentsByTaskId = commentsInline.reduce(function(groupedComments, commentNew) {
    // Pull out the taskId from the current comment
    const {task_id} = commentNew;

    // !This is a fancy JavaScript trick!
    // Set groupedComments[task_id] to groupedComments[task_id] unless
    // groupedComments[task_id] hasn't been set yet. In that case,
    // set it to an empty array. This is a nifty way to set a default value for an object
    // without overwriting if it's already set.
    groupedComments[task_id] = groupedComments[task_id] || [];

    // Now we know groupedComments[task_id] is an array so this next line is valid and won't error
    groupedComments[task_id].push(commentNew);

    // Return groupedComments to the next loop (You must always return your value being built in the reduce)
    return groupedComments;
  }, {});

  // Now we can map over the tasks and add in commnets
  const tasksWithComments = tasksInline.map(function(tasksInline){
  return Object.assign({},
  tasksInline, { commentsInline : commentsByTaskId[tasksInline.task_id]
  });
});


const taskItems = tasksWithComments.map((taskWithComments) => {
  const taskText = taskWithComments.text;
  return (
  	<div>
    	{taskText}
      <ul>
        {taskWithComments.commentsInline.map((commentNew) => {
        	return <li>{commentNew.text}</li>;
        })}
      </ul>
    </div>
  );
});

//using this.props./////////////////debug here
const commentsByTaskId0 = this.props.comments.reduce(function(groupedComments, commentNew) {
  const {task_id} = commentNew;
  groupedComments[task_id] = groupedComments[task_id] || [];
  groupedComments[task_id].push(commentNew);
  return groupedComments;
}, {});

const tasksWithComments0 = this.props.tasks.map(function(tasks){
return Object.assign({},
tasks, { comments : commentsByTaskId0[tasks.task_id]
});
});


const taskItems0 = tasksWithComments0.map((taskWithComments0) => {
  return (
    <div>
      <ul>
        {taskWithComments0.comments.map((commentNew) => {
          return <li>{commentNew.text}</li>;
        })}
      </ul>
    </div>
  );
});

const taskItems2 = tasksInline
.map((tasksInline) =>
<div>{tasksInline.task_name}</div>
);

const taskItems3 = this.props.tasks
.map((tasks) =>
<div>{tasks.task_name}</div>
);

  return (
    <div className = 'App-page'>
        <div className = 'App-content'>
        {taskItems}<br/>
        {taskItems2}
        {taskItems0}
        </div>
    </div>
  );
}

}

export default connect(
  mapStateToProps
)(GroupingComments);
