/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import { green500, grey500 } from 'material-ui/styles/colors';
import ListCard from '../../../components/ListCard';
import {groupBy,values,sortBy} from 'lodash';

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '45%'
  }
}

type Props = {
  fetchMarkettasksFromActions: () => void,
  fetchCommentsFromActions: () => void,
  comments: Comment[],
  markettasks: Markettask[],
}

class Markettasks extends React.Component{

  static defaultProps: {
    markettasks: Markettask[],
    comments: Comment[]
  };

  componentDidMount() {
    this.props.fetchMarkettasksFromActions();
    this.props.fetchCommentsFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      plans:true,
      packages:true,
      supplemental:true
    }
        this.togglePlans = this.togglePlans.bind(this);
        this.togglePackages = this.togglePackages.bind(this);
        this.toggleSupplemental = this.toggleSupplemental.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  togglePlans() {
    this.setState({plans: !this.state.plans});
  }
  togglePackages() {
    this.setState({packages: !this.state.packages});
  }
  toggleSupplemental() {
    this.setState({supplemental: !this.state.supplemental});
  }

render () {

  const {
    markettasks,
    comments
  } = this.props;


      const commentsByTask = groupBy(values(comments), (comment) => comment.task_id);

      const listItemsFromComponent = markettasks.filter((item) => {
return item.parent_task!== null && item.goal_id ==this.props.route.goalID;        })
      .map((markettask) =>
      <div>

      {(commentsByTask[markettask.task_id] || [])
        .map((comment) =>
        <div>
            <ListCard
            taskID={markettask.task_id}
            taskName={markettask.task_name}
            taskStatus={markettask.complete}
            taskScheduled={markettask.scheduled}
            taskType={markettask.task_type}
            commentText={comment.text}
            categoryID1={markettask.category_id_1}
            categoryID2={markettask.category_id_2}
            />
        </div>
      )}
      </div>
      );


    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <h2>Get your first gig as a comedian</h2>
              <MuiThemeProvider>
                <div>
                  <Toggle label = {"Plans"} defaultToggled={true} onToggle={this.togglePlans} />
                  <Toggle label = {"Packages"} defaultToggled={true} onToggle={this.togglePackages} />
                  <Toggle label = {"Supplemental"} defaultToggled={true} onToggle={this.toggleSupplemental} />
                  <Card>
                      {listItemsFromComponent}
                  </Card>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}
Markettasks.defaultProps ={
  markettasks: [],
  comments: []
 };


export default
connect(mapStateToProps, mapDispatchToProps)
(Markettasks);
//connect merges objects into one and passes it into newsfeed as props
