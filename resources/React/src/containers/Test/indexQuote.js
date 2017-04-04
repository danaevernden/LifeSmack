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

class Test extends React.Component{
//  static defaultProps: { goals: Goal[] };

constructor(props) {
    super(props);

   this.state = {
      props: []
    };
  }

  getInitialState() {
      return {data: [], quote: ''};
  }

  componentDidMount() {
  //   attempting to get data from our own json file
  $.ajax({
        url: this.props.route.dataURL,
        dataType: 'json',
        cache: false,
        success: function(data) {
            this.setState({data: data});
            this.chooseRandomQuote();
        }.bind(this),
            error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  }

  chooseRandomQuote() {
     var randomNumber = Math.floor(Math.random() * this.state.data.length);
     var quote = this.state.data[randomNumber];
     this.setState({quote: quote.content.rendered});
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
              <div>{this.props.route.dataURL}</div>
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
export default (Test);
//  connect(mapStateToProps,
//  mapDispatchToProps)
//(GoalList);
