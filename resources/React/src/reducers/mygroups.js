import {ADD_GOALS_TASK} from '../actions/goals';


const DEFAULT_STATE = {
  mygroups:
  [
  {group_id: 1, group_name: "Marathon runners 2017", discussions_followed: "nutrition, long runs, speedwork", events: "3/24 speedwork in the park by Meetup group Dashing Whippets"},
  {group_id: 2, group_name: "React app builders 2017", discussions_followed: "beginner's corner, great coffee shops in NYC", events: "3/12 Meetup group Hacker Hours @ Gregory's coffee NYC"},
  ]
}

const mygroups = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
      case ADD_GOALS_TASK: {
      return {
        ...state, //copies everything from the existing state into the new state
        groupthink: state.groupthink.concat([action.goalTask])
      };
    }
      default:
      return state;
  }
}

export default mygroups;
