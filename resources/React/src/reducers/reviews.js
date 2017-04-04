const DEFAULT_STATE = {
  reviews:
  [{goal_id: 1, name: "Jane Doe", review: "hilarious and fun to work on, I was able to book my own gig at the Comedy Cellar after!", rating: 2.3
  },
  {goal_id: 1, name: "Stacey Gray", review:"could use a section on cross training, I had to define that myself", rating: 4.5}
  ]
}

const reviews = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    // type tells the reducer what to do
    // all reducers are listening for an action
    // anytime state changes, the app will rerender per react
    // what happens after dispatch is fires off
    default:
      return state;
  }
}

export default reviews;
