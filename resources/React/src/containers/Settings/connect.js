import fetchCategories from '../../actions/categories';
import fetchGoals from '../../actions/goals';


export const mapStateToProps = (state) => ({
  goals: state.goals.goals,
  categories: state.categories.categories,
});


export const mapDispatchToProps = (dispatch) => ({
    fetchCategoriesFromActions: () => dispatch(fetchCategories()),
    fetchGoalsFromActions: () => dispatch(fetchGoals()),
});
