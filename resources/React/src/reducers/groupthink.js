import {ADD_GOALS_TASK} from '../actions/goals';


const DEFAULT_STATE = {
  groupthink:
  [
  {group_id: 1, group_name: "Marathon runners 2017", num_members: 233, discussion_groups: "nutrition, long runs, logistics, speedwork"},
  {group_id: 2, group_name: "React app builders 2017", num_members: 234, discussion_groups: "material-ui, beginner's corner, great coffee shops"},
  {group_id: 3, group_name: "Affordable healthier eating NYC", num_members: 12, discussion_groups: "healthy cheap restaurants, recipes corner, places to shop in BK"}
  ]
}

const groupthink = (state = DEFAULT_STATE, action) => {
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

export default groupthink;
