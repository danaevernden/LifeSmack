//categories to further define tasks
const DEFAULT_STATE = {
  rightMenu:
  [
  {item_id: 1, page_name: "tasks", action: null, item_name:"Manage Categories"},
  {item_id: 2 , page_name: "tasks", action: null, item_name:"Task Settings"},
  {item_id: 3, page_name: "goals", action: null, item_name: "Goal Settings"},
  {item_id: 4, page_name: "marketplace", action: null, item_name: "Marketplace Settings"}

  ]
}

const rightMenu = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
      default:
      return state;
  }
}

export default rightMenu;
