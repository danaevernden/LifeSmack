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
import ListCard from '../../../components/ListCardMarketTasks';
import {groupBy,values,sortBy} from 'lodash';
import Layout from '../../Layout';

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '45%'
  },
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '200px'
  },
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


  const testAPIcategories = markettasks.map((markettask) => {
    return (
      <div>
        <li>{markettasks.task_name}</li>
      </div>
    )});

    const comment2s = comments.map((comment) => {
      return (
        <div>
          <li>{comments.task_name}</li>
        </div>
      )});

      const commentsByTask = groupBy(values(comments), (comment) => comment.task_id);

      const listItemsFromComponent = markettasks.filter((item) => {
        return item.goal_id == this.props.route.marketItem;})
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

    const old = (
      <div>
      <Toggle label = {"Plans"} defaultToggled={true} onToggle={this.togglePlans} />
      <Toggle label = {"Packages"} defaultToggled={true} onToggle={this.togglePackages} />
      <Toggle label = {"Supplemental"} defaultToggled={true} onToggle={this.toggleSupplemental} />
      </div>
    );
    return (
                <div>
                      {listItemsFromComponent}
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
