//categories to further define tasks
const DEFAULT_STATE = {
  oldcategories:
  [
  {category_id: 4, goal_id: 1, parent_cat: null, text: "task type"},
  {category_id: 1, goal_id: 1, parent_cat: 4, text:"UI", },
  {category_id: 2, goal_id: 1, parent_cat: 4, text: "back end"},
  {category_id: 3, goal_id: 1, parent_cat: 4, text: "user testing"},
  {category_id: 5, goal_id: 1, parent_cat: null, text: "effort estimation"},
  {category_id: 6, goal_id: 1, parent_cat: 5, text: "low"},
  {category_id: 7, goal_id: 1, parent_cat: 5, text: "medium"},
  {category_id: 8, goal_id: 1, parent_cat: 5, text: "high"},

  ]
}

const oldcategories = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
      default:
      return state;
  }
}

export default oldcategories;
