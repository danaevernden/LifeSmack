import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TaskCard from '../TaskCard';


type Props = {
  name: String,
  scheduled: Date,
  addTaskToGoal: () => Promise<any>
}

const styles = {
  addTask : {
    marginBottom: '10px',
    width: '400px',
  },
  floatingActionButton: {
      marginRight: 20,
      position: 'fixed',
      bottom: '5%',
      right: '5%',
      zIndex: '1500',
    },
    floatingLabel: {
      color: 'black'
    },
    textStyle: {
      display:'inline-block',
      width: '350px',
      float: 'left'
    },
    labelStyle: {
    marginRight: '10%'
    }
};

class AddTask extends React.Component {
  props : Props

  constructor(props){
    super(props)
    this.state= {
      addTaskOpen: false,
      category1_value: 1,
      category2_value: 6,
      name: "",
      scheduled: null,
      taskCard: false,
      test: "testName",
      catID1:1
    }
  this.openTaskCard = this.openTaskCard.bind(this);
  this.addTaskToGoal = this.addTaskToGoal.bind(this);
  }

  openTaskCard() {
    this.setState({taskCard: true})
  }

  taskChange = (event, name) => this.setState({name});
  scheduleChange = (event, scheduled) => this.setState({scheduled});
  handleChange = (event, index, category1_value) => this.setState({category1_value})
  handleChange2 = (event, index, category2_value) => this.setState({category2_value})

  onClose = () => {
        this.setState({taskCard: null})
  }

  addTaskToGoal(taskname, catid1, catid2, catid3) {
    this.props.addTaskToGoal(taskname, catid1, catid2, catid3)
  }

  render() {

    const AddTaskButton =
    <div>
      <FloatingActionButton
        style={styles.floatingActionButton}
        onTouchTap={this.openTaskCard}
        backgroundColor={'rgb(1,230,118)'}
      >
      <ContentAdd />
      </FloatingActionButton>
    </div>
    ;

  const taskCard =
    <div>
        {this.state.taskCard === true ?
          <TaskCard
            open={this.state.taskCard}
            onClose={this.onClose}
            categoryID1={0}
            categoryID2={0}
            categoryID3={0}
            type="addTask"
            addTaskToGoal={this.addTaskToGoal}
          />
          : null}
    </div>
  ;


  return(
    <MuiThemeProvider>
      <div>
        {AddTaskButton}
        {taskCard}
      </div>
    </MuiThemeProvider>
    );
  }
}

export default AddTask;
