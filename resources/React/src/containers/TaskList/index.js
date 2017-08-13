import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import {Card} from 'material-ui/Card';
import ListCardNew from '../../components/ListCardNew';
import AddTask from '../../components/AddTask';
import {groupBy,values,sortBy} from 'lodash';
import Layout from '../Layout';
import { includes } from 'lodash';
import Calendar from '../Calendar';
import TaskCard from '../../components/TaskCard';
import ListCardParent from '../../components/ListCardParent';
import Paper from 'material-ui/Paper';
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
  fetchGoalsFromActions: () => void,
  fetchCommentsFromActions: () => void,
  fetchCategoriesFromActions: () => void,
  handleDeleteTask: () => void,
  tasks: Task[],
  goals: Goal[],
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

    const listItemsFromComponentOld = tasks.map((task) =>
    <div>
    {(commentsByTask[task.task_id] || [])
      .map((comment) =>
      <div>
        {task.task_name}
        {comment.text}
      </div>
    )}
    </div>
    );


    const listItemsFromComponent2 = tasks.filter((item) => {
          return item.parent_id === null;
  }).map((task) =>
    <div>
      <ListCardParent
        taskID={task.id}
        goalID={task.goal_id}
        taskName={task.task_name}
      />
    </div>
    );

    const listItemsNoParents = tasks.filter((item) => {
          return item.parent_id !== null && item.is_child === 0;
  }).map((task) =>
    <div>
      <ListCardNew
        taskID={task.id}
        taskName={task.task_name}
        taskStatus={task.complete}
        taskScheduled={task.scheduled}
        categoryID1={task.category_id_1}
        categoryID2={task.category_id_2}
        categoryID3={task.category_id_3}
        duplicateDialog={this.state.duplicateDialog}
        handleDeleteTask={this.handleDelete}
        openDuplicate={this.openDuplicate}
      />
    </div>
    );

    const taskTabContent =
    //if on main level, parents and no child list
    //if on child level, show children of task that was clicked
    ;
    const goalNameFromComponent = goals
    .filter((item) => {
      return item.id === this.props.route.goalID;
    })
    .map((goal) =>
    <div>
    {goal.goal_name}
    </div>
    );

    const layout =(<div>
        <Layout
        title={goalNameFromComponent}
        subtitle={"2 scheduled tasks"}
        leftContent={"taskListDropdown"}
        tabOne={"Tasks"}
        tabTwo={"Calendar"}
        tabOneContent={listItemsFromComponent2}
        tabTwoContent={"calendar here"}
        />
    }
    </div>)
    ;

//checkbox:
//https://facebook.github.io/jest/docs/tutorial-react.html
    return (
      <div className='App-page' >
        <div className='App-content'>
            {layout}
            <AddTask/>
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
