/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {
  groupBy,
  values
} from 'lodash';

type Props = {
  fetchTasksFromActions: () => void,
  fetchCommentsFromActions: () => void,
  fetchCategoriesFromActions: () => void,
  fetchGoalsFromActions: () => void,
  fetchMarketplaceFromActions: () => void,
  newtasks: NewTask[],
  newcomments: NewComment[],
  newcategories: NewCategory[],
  newgoals: NewGoal[],
  newmarketplace: NewMarketplace[]
}
class TestApi extends React.Component {
  static defaultProps: {
    newtasks: NewTask[],
    newcomments: NewComment[],
    newcategories: NewCategory[],
    newgoals: NewGoal[],
    newmarketplace: NewMarketplace[]
  };

  componentDidMount() {
    this.props.fetchTasksFromActions();
    this.props.fetchCommentsFromActions();
    this.props.fetchCategoriesFromActions();
    this.props.fetchGoalsFromActions();
    this.props.fetchMarketplaceFromActions();
  }
  props:Props

  render() {
    const {
      newtasks,
      newcomments,
      newcategories,
      newgoals,
      newmarketplace
    } = this.props;

    const testAPItasks = newtasks.map((newtask) => {
      return (
        <div>
          <li>{newtask.task_name}</li>
        </div>
      )});

    const testAPIcomments = newcomments.map((newcomment) => {
      return (
        <div>
          <li>{newcomment.text}</li>
        </div>
      )});

    const testAPIcategories = newcategories.map((newcategory) => {
      return (
        <div>
          <li>{newcategory.text}</li>
        </div>
      )});

    const testAPIgoals = newgoals.map((newgoal) => {
      return (
        <div>
          <li>{newgoal.goal_name}</li>
        </div>
      )});

    const testAPImarketplace = newmarketplace.map((newmarketplace) => {
      return (
        <div>
          <li>{newmarketplace.goal_name}</li>
        </div>
      )});

    return (
      <div className='App-page'>
        <div className='App-content'>
          {testAPItasks}
          <br/>
          {testAPIcomments}
          <br/>
          {testAPIcategories}
          <br/>
          {testAPIgoals}
          <br/>
          {testAPImarketplace}
        </div>
      </div>
    )
  }
}
TestApi.defaultProps ={
  newtasks: [],
  newcomments: [],
  newcategories: [],
  newgoals: [],
  newmarketplace: []
 };

export default connect(
  mapStateToProps, mapDispatchToProps
)(TestApi);
