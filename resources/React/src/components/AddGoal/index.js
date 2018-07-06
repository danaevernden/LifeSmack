import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import GoalCard from '../GoalCard';


type Props = {
  name: String,
  scheduled: Date,
  addGoal: () => Promise<any>,
  openSnackbar: () => Promise<any>,
  taskCard: Number,
  snackbar: Boolean
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

class AddGoal extends React.Component {
  props : Props

  constructor(props){
    super(props)
    this.state= {
      addTaskOpen: false,
      snackbar: this.props.snackbar,
      category1_value: 1,
      category2_value: 6,
      name: "",
      scheduled: null,
      taskCard: this.props.taskCard,
      test: "testName",
      catID1:1
    }
  this.onClose = this.onClose.bind(this);
  this.closeSnackbar = this.closeSnackbar.bind(this);
  this.openTaskCard = this.openTaskCard.bind(this);
  this.addGoal = this.addGoal.bind(this);
  }

  openTaskCard() {
    this.setState({taskCard: true});
  }

  taskChange = (event, name) => this.setState({name});
  scheduleChange = (event, scheduled) => this.setState({scheduled});
  handleChange = (event, index, category1_value) => this.setState({category1_value})
  handleChange2 = (event, index, category2_value) => this.setState({category2_value})

  onClose = () => {
    console.log(this.state.snackbar);
        this.setState({taskCard: null,
      });
      console.log("test");
      this.props.openSnackbar();
  }

  closeSnackbar = () => {
      this.setState({snackbar: false})
  }
  addGoal(goalname, catid1) {
    this.props.addGoal(goalname, catid1)
  }

  render() {

    const {
      openSnackbar,
    } = this.props;

    const AddGoalButton =
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

  const goalCard =
    <div>
        {this.state.taskCard === true ?
          <GoalCard
            open={this.state.taskCard}
            onClose={this.onClose}
            openSnackbar={this.openSnackbar}
            closeSnackbar={this.closeSnackbar}
            snackbar={this.state.snackbar}
            categoryID1={0}
            goalID={1}
            type="addGoal"
            addGoal={this.addGoal}
          />
          : null}
    </div>;


  return(
    <MuiThemeProvider>
      <div>
        {AddGoalButton}
        {goalCard}
      </div>
    </MuiThemeProvider>
    );
  }
}

export default AddGoal;
