const DEFAULT_STATE = {
  marketplace:
  [{name: "Joan Rivers", goal: "Get your first gig as a comedian"
  },
  {name: "Nike Sports", task:"PR on your next 10K race"}
  ]
}

const marketplace = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    // type tells the reducer what to do
    // all reducers are listening for an action
    // anytime state changes, the app will rerender per react
    // what happens after dispatch is fires off
    default:
      return state;
  }
}

export default marketplace;
