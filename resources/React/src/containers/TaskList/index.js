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
import ListCard from '../../components/ListCard';
import CheckboxButton from '../../components/CheckboxButton';
import AddTask from '../../components/AddTask';
import GoalName from '../../components/GoalName';
import {groupBy,values,sortBy} from 'lodash';
import Layout from '../Layout';
import { includes } from 'lodash';
import Calendar from '../Calendar';

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
    display: 'inline-block',
    marginTop: '300px'
  },
  cardStyle: {
    width: '400px',
    display: 'inline-block'
  }
};

type Props = {
  fetchTasksFromActions: () => void,
  fetchCommentsFromActions: () => void,
  fetchCategoriesFromActions: () => void,
  handleDeleteTask: () => void,
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
      showCompletedTasks: true,
      duplicateDialog: false,
      include: window.location.href
    }
    this.updateFilter = this.updateFilter.bind(this);
    this.showCompletedTasks = this.showCompletedTasks.bind(this);
    this.sortOptionSelection = this.sortOptionSelection.bind(this);
    this.openDuplicate = this.openDuplicate.bind(this);
  }
//get this to work, test it first?
  sortBy(field) {
      this.setState({
        tasks: sortBy(this.state.tasks, field)
      })
  }

  openDuplicate() {
    this.setState({duplicateDialog: true})
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
      handleDeleteTask,
      tasks,
      comments,
      categories,
      categories2,
      goals
    } = this.props;

    const categoriesByTask = groupBy(values(categories), (category) => category.category_id);
    const sortByDate = sortBy(values(tasks), (task) => task.scheduled);
    const commentsByTask = groupBy(values(comments), (comment) => comment.task_id);

    const rightMenuItems = this.props.rightMenu.filter((item) => {
      return item.page_name == "tasks";
    }).map((rightMenu) =>
    <div>
    {rightMenu.item_name}
    </div>
  );

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
          duplicateDialog={this.state.duplicateDialog}
          handleDeleteTask={handleDeleteTask}
          openDuplicate={this.openDuplicate}
          />
      </div>
    )}
    </div>
    );

    const listItemsFromComponent2 = tasks.filter((item) => {
          return item.goal_id ==this.props.route.goalID;
    })
    .map((task) =>
    <div>
      {task.task_name}
    </div>
    );


    const include =(<div>
      {includes(this.state.include, '/goal/1/calendar') == true
      ?
      <div>
          <Calendar/>
      </div>
       :
      <div>
          <div style={styles.CompTasksGrouper}>
            <div><Checkbox checked={this.state.showCompletedTasks} onCheck={this.showCompletedTasks} />
            </div>
              Show Completed Tasks?
          </div>
          {listItemsFromComponent2}
      </div>
      }
      </div>);


    const categoriesForDropdown = categories
    .filter((item) =>{
        return item.goal_id == this.props.route.goalID;
    });

    const goalNameFromComponent = goals.filter((item) => {
      return item.goal_id == 2;
    })
    .map((goals) =>
    <div>
    {goals.goal_name}
    hey
    </div>
    );

    const layout =(<div>
    {includes(this.state.include, '/goal/1/calendar') == true
    ?
        <Layout
        title={'build LIfesmack'}
        subtitle={"2 scheduled tasks"}
        buttonTitle={"view tasks"}
        leftContent={"taskListDropdown"}
        buttonAction={"/goal/" + goals.goal_id + "/calendar"}
        />
    :
        <Layout
        title={'build LIfesmack'}
        subtitle={"2 scheduled tasks"}
        buttonTitle={"view calendar"}
        leftContent={"taskListDropdown"}
        buttonAction={"/goal/" + goals.goal_id + "/calendar"}
        />
    }
    </div>)
    ;

//checkbox:
//https://facebook.github.io/jest/docs/tutorial-react.html
    return (
      <div className = 'App-page' >
        <div className = 'App-content'>
        {layout}

          <div className='Top-menu' style={styles.topMenu} >
              <div>
                <MuiThemeProvider>
                  <Card style={styles.cardStyle}>
                    {include}
                  </Card>
                </MuiThemeProvider>
              </div>
              <div>
                  <AddTask/>
                  {goalNameFromComponent}
              </div>
              <br/>
          </div>
        </div>
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
