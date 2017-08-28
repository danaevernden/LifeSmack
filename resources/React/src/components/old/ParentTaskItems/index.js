


///can expose expandParentTaskVar and ParentTaskItems to be used in containers

  const styles - {
    parentTaskItems: {
      flexWrap: 'wrap',
      marginBottom: '20px',
      marginLeft: '10%',
      marginRight: '30%'
    },
    parentStyle: {
      display: 'inline-block',
      textAlign: 'left'
    },
    inlineBlock2: {
      display:'inline-block'
    },
    checkboxCompleted: {
      display: 'inline-block',
      width: '10%',
      height: '10px',
      marginBottom: '10px'
    },
  }

class ParentClassItems extends React.Component(
  constructor(props){
    this.state ={
      expandParentTask: true,
    }
  }

  expandParentTask() {
    this.setState({expandParentTask: !this.state.expandParentTask})
  }

  render() {
    const parentTaskItems = this.props.tasks.filter((item) => {
      return item.parent_task == null && item.goal_id == this.props.route.goalID;
      })
    .map((tasks) =>
    <div style={styles.parentTaskItems}>
    <Card>
      <div style={styles.parentStyle}>
        <div style={styles.checkboxCompleted}>
            {tasks.complete == true ? <ActionDone /> : <CheckboxButton />}
        </div>
        <TextField style={styles.inlineBlock2} defaultValue={tasks.task_name}/>
      </div>
      {this.state.expandParentTask ? <ExpandLess onTouchTap={this.expandParentTask} /> : <ExpandMore onTouchTap={this.expandParentTask}/>}
      </Card>
      </div>
    );

    let expandParentTaskVar = null;
    if(this.state.expandParentTask) {
      expandParentTaskVar =
      <div>
      <MuiThemeProvider>
        <Card style={styles.background}>
          <Divider />
          {listItems}
        </Card>
      </MuiThemeProvider>
      </div>;
    }

  }
  )
