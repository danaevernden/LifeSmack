/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import GoalNames from '../../components/GoalNames';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';
import axios from 'axios';

//type Props = {
//  areGoalsLoading: Bool,
//  fetchGoals: () => void,
//  goals: Goal[]
//};

class GoalList extends React.Component{
//  static defaultProps: { goals: Goal[] };

constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
  //   this code shows we can get data from another API and return it
    axios.get(`http://www.reddit.com/r/${this.props.route.subreddit}.json`)
     .then(res => {
       const posts = res.data.data.children.map(obj => obj.data);
       this.setState({ posts });
     });
  }
  render() {
//    const {
//      areGoalseLoading,
//      goals,
//    } = this.props;

//////////////to debug this: //////////////
//   http://stackoverflow.com/questions/27864720/react-router-pass-props-to-handler-component?answertab=active#tab-top
////// try Thomas E's answer /////////////////

///////this was built using this:
//     https://daveceddia.com/ajax-requests-in-react/

    return (
      <div className = 'App-page'>
          <Homepage/>
          <div className = 'App-content'>
              <h2>Goals</h2>
            //  <GoalNames/>

            <h1>{`/r/${this.props.route.subreddit}`}</h1>
                   <ul>
                     {this.state.posts.map(post =>
                       <li key={post.id}>{post.title}</li>
                     )}
                   </ul>
          </div>
      </div>
    );
  }
}

              //   {areGoalsLoading}
              //    {goals.map(goal => <GoalNames
              //    id={goal.id}
              //    name={goal.name}
              //    />)}

//GoalList.defaultProps = { goals: [] };
//export default GoalList;
export default (GoalList);
//  connect(mapStateToProps,
//  mapDispatchToProps)
//(GoalList);
