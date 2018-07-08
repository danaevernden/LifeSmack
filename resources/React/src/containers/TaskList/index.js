import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import {Card, CardText} from 'material-ui/Card';
import ListCard from '../../components/ListCard';
import AddTask from '../../components/AddTask';
import {sortBy} from 'lodash';
import Layout from '../Layout';
import Paper from 'material-ui/Paper';
import incomTask from '../../../../../public/images/incomplete task icon.png';
import RaisedButton from 'material-ui/RaisedButton';
import Running from '../../../../../public/images/running.jpg';
import Programming from '../../../../../public/images/programming.jpg';
import Snackbar from 'material-ui/Snackbar';
import NiceBackground from '../../../../../public/images/nice_background.jpeg';

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

  },
  snackbar: {
    marginLeft: '150px'
  },
  noTasks: {
    marginLeft: '50px',
    marginTop: '30px'
  },
  backButtonStyle: {
    marginRight: '100px',
    position: 'absolute',
    zIndex: '3',
    marginTop: '140px'
  },
  paperStyle: {
    height: '400px',
    overflow: 'auto'
  },
};

type Props = {
  fetchTasksFromActions: () => void,
  fetchGoalsFromActions: () => void,
  fetchCategoriesFromActions: () => void,
  handleDeleteTask: (taskId) => void,
  tasks: Task[],
  goals: Goal,
  categories: Category[],
}


class TaskList extends React.Component{

  static defaultProps: {
    tasks: Task[],
    categories: Category[],
    goals: Goal[]
  };

  componentDidMount() {
    this.props.fetchTasksFromActions();
    this.props.fetchCategoriesFromActions();
    this.props.fetchGoalsFromActions();
    console.log(this.state.snackbar);
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
      snackbar: true,
      is_child: 0,
      parentTask: null,
      goalID: this.props.route.goalID
    }

    this.openSnackbar = this.openSnackbar.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.showCompletedTasks = this.showCompletedTasks.bind(this);
    this.sortOptionSelection = this.sortOptionSelection.bind(this);
    this.openDuplicate = this.openDuplicate.bind(this);
    this.openTaskCard = this.openTaskCard.bind(this);
    this.openTaskChildren = this.openTaskChildren.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.addTaskToGoal = this.addTaskToGoal.bind(this);
    this.goBack = this.goBack.bind(this);
    }

    goBack() {
      console.log("test");
        this.setState({
          parentTask: null
        })
    }

//get this to work, test it first?
  sortBy(field) {
      this.setState({
        tasks: sortBy(this.state.tasks, field)
      })
  }

  handleDeleteTask(task_Id) {

     return this.props.handleDeleteTask(task_Id)
  }

  addTaskToGoal(taskname, catid1, catid2, catid3, goal_id, is_child, parent_id, parentTask, dateSelected) {
    this.props.addTaskToGoal(taskname, catid1, catid2, catid3, goal_id, is_child, this.state.parentTask, dateSelected)
  }


  editTask(taskID, taskname, catid1, catid2, catid3, goal_id, complete) {
    console.log(goal_id);
    this.props.editTask(taskID, taskname, catid1, catid2, catid3, goal_id, complete)
  }

  openDuplicate() {
    this.setState({duplicateDialog: true})
  }

  showCompletedTasks() {
    this.setState({showCompletedTasks: !this.state.showCompletedTasks})
  }


  openSnackbar() {
    console.log("test2324")
    this.setState({snackbar: !this.state.snackbar})
    console.log(this.state.snackbar)

  }


  openTaskCard(task_id) {
      if(null == task_id) {
          this.setState({taskCard: null})
      }
          this.setState({taskCard: task_id})
      }

  openTaskChildren(task_id) {
      if(null == task_id) {
          this.setState({parentTask: null});
          this.setState({is_child: 0});
      }
          this.setState({parentTask: task_id});
          this.setState({is_child: 1});
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
      categories,
      categories2,
      goals
    } = this.props;


    const listItemsFromComponent2 =
    <div>{
      tasks.filter((item) => {
          return item.parent_id === null && item.is_child === 0 && item.goal_id === this.state.goalID;
    }).length > 0 ?
      tasks.filter((item) => {
          return item.parent_id === null && item.is_child === 0 && item.goal_id === this.state.goalID;
        }).map((task) =>
        <div>
            <Card
            onClick={() => this.openTaskChildren(task.task_id)}
            style={styles.taskCardStyle}>
                <CardText>
                    <img role="presentation" src={incomTask} style={{paddingRight:'20px'}} />
                    <div style={styles.taskLabelStyle}>
                        {task.task_name}
                    </div>
                </CardText>
            </Card>
        </div>
        )
    :
        <div style={styles.noTasks}>
          No tasks for this goal yet - click the + sign below to add your first task!
        </div>
    }</div>;

      const allTasks = tasks.filter((item) => {
            return item.is_child ===1  && item.goal_id === this.state.goalID;
    }).map((task) =>
      <div>
          <ListCard
            taskID={task.id}
            goalID={task.goal_id}
            complete={task.complete}
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
            return item.parent_id === this.state.parentTask && item.is_child === 1 && item.goal_id === this.state.goalID  && item.complete === 0;
    }).map((task) =>
      <div>
        <ListCard
          taskID={task.id}
          goalID={task.goal_id}
          complete={task.complete}
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
            return item.parent_id === null && item.is_child === 1 && item.goal_id === this.state.goalID;
    }).map((task) =>
      <div>
        <ListCard
          taskID={task.id}
          goalID={task.goal_id}
          complete={task.complete}
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

      const nosubtasks =
      <div style={styles.noTasks}>
        No subtasks for this parent task :(
      </div>;

      const tasksFlip =
      <div>
        {this.state.parentTask === null ?
          <div>
          <Paper style={styles.paperStyle}>

                {listItemsFromComponent2}
                {listItemsNoParents}
              </Paper>
          </div>
        :
            <div>
            {tasks.filter((item) => {
                    return item.parent_id === this.state.parentTask && item.is_child === 1;
            }).length > 0 ?
              <div>
                <Paper style={styles.paperStyle}>
                  {taskList}
                </Paper>
              </div>
              :
              <div>
              {nosubtasks}
              </div>
            }
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

      const backButton =
      <div>
        {this.state.parentTask === null ?
          null
          :
          <RaisedButton style={styles.backButtonStyle}
            onClick={this.goBack}>
            ◄ back
          </RaisedButton>
        }
      </div>

    const layout =(<div>
        <Layout
        title={goalNameFromComponent}
        leftContent={"taskListDropdown"}
        tabOne={"Grouped Tasks"}
        tabTwo={"All Tasks"}
        tabOneContent={tasksFlip}
        tabTwoContent={allTasks}
        imageID={
                  this.state.goalID === 1
                  ? <img role="presentation" src={Programming}/>
                  :
                  [ this.state.goalID === 2 ?
                    <img role="presentation" src={Running} />
                    :
                    <img role="presentation" src={NiceBackground} />
                  ]
                }
        />

    </div>)
    ;

    const addTaskButton =
    <AddTask
    addTaskToGoal={this.addTaskToGoal}
    taskCard={this.state.taskCard}
    snackbar={this.state.snackbar}
    openSnackbar={this.openSnackbar}
    goalID={this.state.goalID}
    />
    ;

    return (
      <div className='App-page' >
        <div className='App-content'>
            {backButton}
            {layout}

            {addTaskButton}
        </div>
      </div>
    );
  }
}


TaskList.defaultProps ={
  tasks: [],
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
