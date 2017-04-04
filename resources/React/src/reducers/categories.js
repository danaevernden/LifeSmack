//categories to further define tasks
const DEFAULT_STATE = {
  categories:
  [
  {category_id: 4, parent_cat: null, text: "task type"},
  {category_id: 1, parent_cat: 4, text:"UI", },
  {category_id: 2, parent_cat: 4, text: "back end:"},
  {category_id: 3, parent_cat: 4, text: "user testing"},
  {category_id: 5, parent_cat: null, text: "effort estimation"},
  {category_id: 6, parent_cat: 5, text: "low"},
  {category_id: 7, parent_cat: 6, text: "medium"},
  {category_id: 8, parent_cat: 7, text: "high"}
  ]
}

const categories = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
      default:
      return state;
  }
}

export default categories;
