import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardText} from 'material-ui/Card';
import ListCard from '../../components/ListCard';
import AddTask from '../../components/AddTask';
import {groupBy,values,sortBy} from 'lodash';
import Layout from '../Layout';
import { includes ,find } from 'lodash';
import Calendar from '../Calendar';
import TaskCard from '../../components/TaskCard';
import ListCardParent from '../../components/ListCardParent';
import Paper from 'material-ui/Paper';
import incomTask from '../../../../../public/images/incomplete task icon.png';
import redIncomTask from '../../../../../public/images/incomplete marketplace task icon.png';
import RaisedButton from 'material-ui/RaisedButton';

//to do
//figure out how to pass categories table down to categoryItems, and then map through categoryparents and children to create dropdowns
//add if statement to change sortOption based on what button is clicked

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
  },
  taskLabelStyle: {
    display: 'ruby-text-container'

  }
};

type Props = {
  fetchTasksFromActions: () => void,
  fetchGoalsFromActions: () => void,
  fetchCommentsFromActions: () => void,
  fetchCategoriesFromActions: () => void,
  handleDeleteTask: (taskId) => void,
  tasks: Task[],
  goals: Goal[],
  comments: Comment[],
  categories: Category[],
}


class TaskList extends React.Component{

  static defaultProps: {
    tasks: Task[],
    comments: Comment[],
    categories: Category[],
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
      include: window.location.href,
      taskCard: null,
      parentTask: null
    }
    this.updateFilter = this.updateFilter.bind(this);
    this.showCompletedTasks = this.showCompletedTasks.bind(this);
    this.sortOptionSelection = this.sortOptionSelection.bind(this);
    this.openDuplicate = this.openDuplicate.bind(this);
    this.openTaskCard = this.openTaskCard.bind(this);
    this.openTaskChildren = this.openTaskChildren.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.addTaskToGoal = this.addTaskToGoal.bind(this);
    this.editTask = this.editTask.bind(this);
    }
//get this to work, test it first?
  sortBy(field) {
      this.setState({
        tasks: sortBy(this.state.tasks, field)
      })
  }

  handleDeleteTask(task_Id) {
    const taskId = this.props.taskID;
    this.props.handleDeleteTask(task_Id)
    .then(() => {
      this.setState({
        deleteID: task_Id
      });
  });
  }

  addTaskToGoal(taskname, catid1, catid2, catid3, goal_id, is_child, parent_id) {
    this.props.addTaskToGoal(taskname, catid1, catid2, catid3, goal_id, is_child, parent_id)
  }

  editTask(taskID, catid1, catid2, catid3, complete) {
    this.props.editTask(taskID, catid1, catid2, catid3, complete)
  }

  openDuplicate() {
    this.setState({duplicateDialog: true})
  }

  showCompletedTasks() {
    this.setState({showCompletedTasks: !this.state.showCompletedTasks})
  }

  openTaskCard(task_id) {
      if(null == task_id) {
          this.setState({taskCard: null})
      }
          this.setState({taskCard: task_id})
      }

  openTaskChildren(task_id) {
      if(null == task_id) {
          this.setState({parentTask: null})
      }
          this.setState({parentTask: task_id})
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


    const listItemsFromComponent2 = tasks.filter((item) => {
          return item.parent_id === null && item.is_child === 0;
  }).map((task) =>
    <div>
        <Card
        onClick={() => this.openTaskChildren(task.id)}
        style={styles.taskCardStyle}>
            <CardText>
                <img src={incomTask} style={{paddingRight:'20px'}} />
                <div style={styles.taskLabelStyle}>
                    {task.task_name}
                </div>
            </CardText>
        </Card>
    </div>
    );

    const allTasks = tasks.filter((item) => {
          return item.parent_id !== null;
  }).map((task) =>
    <div>
        <ListCard
          taskID={task.id}
          taskName={task.task_name}
          taskStatus={task.complete}
          taskScheduled={task.scheduled}
          categoryID1={task.category_id_1}
          categoryID2={task.category_id_2}
          categoryID3={task.category_id_3}
          duplicateDialog={this.state.duplicateDialog}
          handleDeleteTask={this.handleDeleteTask}
          editTask={this.editTask}
          openDuplicate={this.openDuplicate}
        />
    </div>
    );


//  const categoryByID = find(values(goals), ['id', 1]);
//  const test = <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>hey<br/>{categoryByID}</div>;
  const taskList = tasks.filter((item) => {
          return item.parent_id === this.state.parentTask && item.is_child === 1;
  }).map((task) =>
    <div>
      <ListCard
        taskID={task.id}
        taskName={task.task_name}
        taskStatus={task.complete}
        taskScheduled={task.scheduled}
        categoryID1={task.category_id_1}
        categoryID2={task.category_id_2}
        categoryID3={task.category_id_3}
        duplicateDialog={this.state.duplicateDialog}
        handleDeleteTask={this.handleDeleteTask}
        editTask={this.editTask}
        openDuplicate={this.openDuplicate}
      />
    </div>
    );

    const listItemsNoParents = tasks.filter((item) => {
          return item.parent_id === null && item.is_child === 1;
  }).map((task) =>
    <div>
      <ListCard
        taskID={task.id}
        taskName={task.task_name}
        taskStatus={task.complete}
        taskScheduled={task.scheduled}
        categoryID1={task.category_id_1}
        categoryID2={task.category_id_2}
        categoryID3={task.category_id_3}
        duplicateDialog={this.state.duplicateDialog}
        handleDeleteTask={() =>this.handleDeleteTask()}
        editTask={this.editTask}
        openDuplicate={this.openDuplicate}
      />
    </div>
    );

    const tasksFlip =
    <div>
      {this.state.parentTask === null ?
        <div>
          {listItemsFromComponent2}
          {listItemsNoParents}
          </div>
      :
        <div>
          {taskList}
        </div>
      }
    </div>;

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
        leftContent={"taskListDropdown"}
        tabOne={"Grouped Tasks"}
        tabTwo={"All Tasks"}
        tabOneContent={tasksFlip}
        tabTwoContent={allTasks}
        />
    }
    </div>)
    ;

    const addTaskButton =
    <AddTask
    addTaskToGoal={this.addTaskToGoal}
    />
    ;

    return (
      <div className='App-page' >
        <div className='App-content'>
            {layout}
            {addTaskButton}
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


//old code
/*

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
*/
