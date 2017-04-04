const DEFAULT_STATE = {
  marketplace:
  [{goal_id: 1, name: "Joan Rivers", goal_name: "Get your first gig as a comedian", rating: 2.3, plan_description:
  "Want to get your name up in lights? Follow this schedule to write your bits, practice with friends, and book your first gig. Watch clips on how Joan Rivers writes her bits and catalogs them via a Dewey decimal system", plan_description: "weeks 1-3: bit writing, weeks 4-6: performing with friends, weeks 7-9: hustling for your first gig",
  category: "package", hashtags: "comedy, showbiz, gig, laugh"
  },
  {goal_id: 2, name: "Meb", goal_name:"PR on your next 10K race", rating: 4.5, plan_description:
  "A 10 week, 3x/week training progrma combining stretching, strength training, and speedwork to help you PR on your next race", plan_description: "week 1: 2 mi tempo, 3 mi run, 2 mi easy. week 2: 1 mi speedwork, 4 mi easy, 2 mi run",
category: "plan", hashtags: "run, marathon, 10K, race"},
{goal_id: 3, name: "David Ortiz", goal_name: "Tips on improving your batting average", rating : 3.0, plan_description: "watch David Ortiz discuss his secrets for improving his batting average",
category: "supplemental", hashtags: "baseball, batting, Red Sox"}
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
