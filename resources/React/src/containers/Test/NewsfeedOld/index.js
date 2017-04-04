/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../../components/Homepage';


class Newsfeed extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      name: "",
      task: ""
    }

    this.updateFilter = this.updateFilter.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addNewsItem = this.addNewsItem.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updateTask(e) {
    this.setState({
      task: e.target.value
    })
  }

//calls connected prop addnewsitem from connect.js . sets state to wipe out name and task after adding
  addNewsItem() {
    //this is a dispatch
    this.props.addNewsItem(this.state.name, this.state.task);
    this.setState({
      name: "",
      task: ""
    })
  }

  render() {

    const listItems = this.props.newsfeed.filter((item) => {
      if (this.state.filter) {
        return item.name.startsWith(this.state.filter);
      }

      return true;
    })
    .map((newsfeed) =>
    <li>{newsfeed.name} {newsfeed.task} / comment / like</li>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <Homepage/>
              <h2>Newsfeed</h2>
                <input onChange={this.updateFilter} value={this.state.filter}/>
                <ul>{listItems}</ul>
                <div>
                  <div>
                    Name <input onChange={this.updateName} value={this.state.name} />
                  </div>
                  <div>
                    Item <input onChange={this.updateTask} value={this.state.task} />
                  </div>
                  <div>
                    <button onClick={this.addNewsItem}>Add</button>
                  </div>
                </div>
          </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed);
//connect merges objects into one and passes it into newsfeed as props
