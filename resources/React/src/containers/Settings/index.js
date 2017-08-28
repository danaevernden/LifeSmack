import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ManageCategories from '../../components/ManageCategories';
import {groupBy,values} from 'lodash';
import { mapStateToProps, mapDispatchToProps } from './connect';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Profile from '../Profile';

type Props = {
  categories: Category[],
  parentcategories: parentCategory[],
  fetchCategoriesFromActions: () => void,
  fetchGoalsFromActions: () => void,
  goals: Goal[]
}

const styles = {
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '40px'
  },
}

class Settings extends React.Component {

  static defaultProps: {
    categories: Category[],
    goals: Goal[],
    parentcategories: parentCategory[]
  };

  componentDidMount() {
    this.props.fetchGoalsFromActions();
    this.props.fetchCategoriesFromActions();
  }
  props:Props

  render () {

    const {
      categories,
      parentcategories,
      goals
    } = this.props;

    const categoriesByCategory = groupBy(values(categories), (category) => category.parent_cat);

    const manageCategories = parentcategories.filter((item)=>
      {return item.parent_cat == null})
      .map((parentcategory) =>
      <div>
          {parentcategory.text}
          {(categoriesByCategory[parentcategory.id] || [])
          .map((category) =>
            <ListItem
            primaryText={category.text}/>
          )}
      </div>
    );

    const test =
      <List>
        {manageCategories}
      </List>;

    return(
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
                <div style={styles.topMenu}>
                  <Profile/>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    )
  }
}

Settings.defaultProps ={
  categories: [],
  goals: [],
  parentcategories: []
 };

 export default connect(
   mapStateToProps, mapDispatchToProps
 )(Settings);
