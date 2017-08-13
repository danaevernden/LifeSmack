import ManageCategoriesMenu from '../../components/ManageCategoriesMenu';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ManageCategories from '../../components/ManageCategories';
import {groupBy,values} from 'lodash';
import { mapStateToProps, mapDispatchToProps } from './connect';
import { connect } from 'react-redux';


type Props = {
  categories: Category[],
  fetchCategoriesFromActions: () => void,
  fetchGoalsFromActions: () => void,
  goals: Goal[]
}

const styles = {
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '100px'
  },
}


class Settings extends React.Component {

  static defaultProps: {
    categories: Category[],
    goals: Goal[]
  };

  componentDidMount() {
    this.props.fetchGoalsFromActions();
    this.props.fetchCategoriesFromActions();
  }
  props:Props


  render () {

    const {
      categories,
      goals
    } = this.props;

    const categoriesByCategory = groupBy(values(categories), (category2) => category2.parent_cat);


          const manageCategories = categories.filter((item)=>
          {return item.parent_cat == null})
          .map((category) =>
          <div>
          {(categoriesByCategory[category.category_id] || [])
          .map((category2) =>
          <div>
                <ManageCategories
                category_id={category.category_id}
                text={category.text}
                parent_cat={category.parent_cat}
                child_cat_id={category2.category_id}
                child_cat_text={category2.text}
                />
                {category.text}
                {category2.text}
            </div>
          )}
          </div>
        );

      const manageCategories2 = categories.map((category) =>
          {
            (category.parent_cat !== null) ?
          <div>{category.text}</div>
          :
          <div>{category.text} no</div>

          }
      );

    return(
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
                <div style={styles.topMenu}>
                    test Settings
                    {manageCategories2}
                    {manageCategories}
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    )
  }
}
Settings.defaultProps ={
  categories: [],
  goals: []
 };

 export default connect(
   mapStateToProps, mapDispatchToProps
 )(Settings);
