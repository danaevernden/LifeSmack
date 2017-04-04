//comments for tasks
const DEFAULT_STATE = {
  comments:
  [
  {comment_id: 1, task_id: 1, text:"need to ask ryan", },
  {comment_id: 2, task_id: 3, text: "check out this link:"},
  {comment_id: 3, task_id: 4, text: "watch on train"}
  ]
}

const comments = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
      default:
      return state;
  }
}

export default comments;
