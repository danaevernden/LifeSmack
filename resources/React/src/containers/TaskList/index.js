import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {Card} from 'material-ui/Card';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import TaskMenu from '../../components/TaskMenu';
import TaskListSortOptions from '../../components/TaskListSortOptions';
import ListCard from '../../components/ListCard';
import CheckboxButton from '../../components/CheckboxButton';
import AddTask from '../../components/AddTask';
import ManageCategoriesMenu from '../../components/ManageCategoriesMenu';
import ManageCategories from '../../components/ManageCategories';
import GoalName from '../../components/GoalName';
import {groupBy,values,sortBy} from 'lodash';
import DialogComponent from '../../components/Dialog';

//to do
//figure out what to do about parent task
//figure out how to pass categories table down to categoryItems, and then map through categoryparents and children to create dropdowns
//add if statement to change sortOption based on what button is clicked
//other icons to use:
//--actions/schedule
//--actions/update
//--actions/watch-later
//--actions/add alert
//--actions/warning
//--actions/settings

const styles = {
  background: {
    backgroundColor: 'rgb(233,235,238)'
  },
  CompTasksGrouper: {
    textAlign: 'center',
    display: 'flex'
  },
  inlineBlock: {
    display: 'inline-block',
    marginBottom: '10px'
  },
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block'
  },

};

type Props = {
  fetchTasksFromActions: () => void,
  fetchCommentsFromActions: () => void,
  fetchCategoriesFromActions: () => void,
  tasks: Task[],
  comments: Comment[],
  categories: Category[],
  categories2: Category2[]
}



class TaskList extends React.Component{

  static defaultProps: {
    tasks: Task[],
    comments: Comment[],
    categories: Category[],
    categories2: Category2[],
    goals: Goal[]
  };

  componentDidMount() {
    this.props.fetchTasksFromActions();
    this.props.fetchCommentsFromActions();
    this.props.fetchCategoriesFromActions();
    this.props.fetchGoalsFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      sortOption: "Category",
      showCompletedTasks: true
    }
    this.updateFilter = this.updateFilter.bind(this);
    this.showCompletedTasks = this.showCompletedTasks.bind(this);
    this.sortOptionSelection = this.sortOptionSelection.bind(this);
  }
//get this to work, test it first?
  sortBy(field) {
      this.setState({
        tasks: sortBy(this.state.tasks, field)
      })
  }

  showCompletedTasks() {
    this.setState({showCompletedTasks: !this.state.showCompletedTasks})
  }

  sortOptionSelection(pick) {
    this.setState({sortOption: pick})
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  render() {

    const {
      tasks,
      comments,
      categories,
      categories2,
      goals
    } = this.props;

    const categoriesByTask = groupBy(values(categories), (category) => category.category_id);
    const sortByDate = sortBy(values(tasks), (task) => task.scheduled);
    const commentsByTask = groupBy(values(comments), (comment) => comment.task_id);

    const listItemsFromComponent = tasks.filter((item) => {
      if (this.state.showCompletedTasks) {
        if (this.state.filter) {
          return item.task_name.startsWith(this.state.filter) && item.parent_task!== null && item.goal_id ==this.props.route.goalID;
        }
          return item.parent_task!== null && item.goal_id ==this.props.route.goalID;
    }
      if(this.state.filter) {
          return item.task_name.startsWith(this.state.filter) && item.parent_task!== null && item.goal_id ==this.props.route.goalID;
      }
          return item.parent_task!== null && item.complete == false && item.goal_id ==this.props.route.goalID;
  })
    .map((task) =>
    <div>
    {(commentsByTask[task.task_id] || [])
      .map((comment) =>
      <div>
          <ListCard
          taskID={task.task_id}
          taskName={task.task_name}
          taskStatus={task.complete}
          taskScheduled={task.scheduled}
          commentText={comment.text}
          categoryID1={task.category_id_1}
          categoryID2={task.category_id_2}
          categoryID3={task.category_id_3}
          />
      </div>
    )}
    </div>
    );

    const categoriesByCategory = groupBy(values(categories2), (category2) => category2.parent_cat);

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
      </div>
    )}
    </div>
  );

    const listItemsFromComponent2 = tasks.filter((item) => {
        if (this.state.showCompletedTasks) {
          if (this.state.filter) {
            return item.task_name.startsWith(this.state.filter) && item.parent_task!== null && item.goal_id ==this.props.route.goalID;
          }
            return item.parent_task!== null && item.goal_id ==this.props.route.goalID;
      }
        if(this.state.filter) {
            return item.task_name.startsWith(this.state.filter) && item.parent_task!== null && item.goal_id ==this.props.route.goalID;
        }
            return item.parent_task!== null && item.complete == false && item.goal_id ==this.props.route.goalID;
    })
    .map((task) => {
  return(  <div>
    <li>{task.task_name}</li>
    </div>
)}  );

    const categoriesForDropdown = categories
    .filter((item) =>{
        return item.goal_id == this.props.route.goalID;
    });

    const goalNameFromComponent = goals.filter((item) => {
      return item.goal_id == this.props.route.goalID;
    })
    .map((goals) => <GoalName name={goals.goal_name} image={goals.image} />
    );

//checkbox:
//https://facebook.github.io/jest/docs/tutorial-react.html
    return (
      <div className = 'App-page' >
        <div className = 'App-content'>
        <DialogComponent
          dialogText={'hello'}
          actionMore={'learn more'}
          actionClose={'Cancel'}
        />

          <div className='Top-menu' style={styles.topMenu} >
              {goalNameFromComponent}
              <TaskListSortOptions
              sortOption={1}
              />
              <div style={styles.inlineBlock}>
                Search: <input onChange={this.updateFilter} value={this.state.filter}/>
              </div>
              <div style={styles.inlineBlock}>
                <div style={styles.CompTasksGrouper}>
                  <div><Checkbox checked={this.state.showCompletedTasks} onCheck={this.showCompletedTasks} /></div>
                    Show Completed Tasks?
                  </div>
                  <div>
                  <FlatButton onClick={this.sortBy.bind(this, 'task_id')}>
                      sort by id
                  </FlatButton>
                </div>
                </div>
                <div>
                <div style={styles.inlineBlock}>
                  <ManageCategoriesMenu
                    cats={manageCategories}
                  />
                </div>
              </div>
            </div>
              </div>
              <div>
              <MuiThemeProvider>
                <Card style={styles.background}>
                  {listItemsFromComponent}
                </Card>
              </MuiThemeProvider>
              </div>
              <div>
              <AddTask/>
      
              {listItemsFromComponent2}
              </div>
          <br/>
      </div>
    );
  }
}

TaskList.defaultProps ={
  tasks: [],
  comments: [],
  categories: [],
  goals: []
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
