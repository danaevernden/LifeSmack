/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import FlatButton from 'material-ui/FlatButton';

//to do:
//--want to add like button:
//http://stackoverflow.com/questions/36210503/incrementing-counter-for-each-item-in-a-newsfeed
//--make comment box only appear for button that's clicked
//--get add comment function to work, haven't tested it yet
//--nested maps - map through newsfeed, then comments
//--repurpose comment button to be submit button when typing a comment, OR
//--submit a comment by pressing enter?



class Newsfeed extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      comment:""
    }

    this.updateFilter = this.updateFilter.bind(this);
    this.commentBox = this.commentBox.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  commentBox() {
    this.setState({commentBoxVisible: !this.state.commentBoxVisible});
  }

  addComment() {
    this.props.addComment(this.state.comment);
    this.setState({
      comment: ""
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
    <div>{newsfeed.name} {newsfeed.task} <br/>
    {newsfeed.likes} likes
    <button onClick={this.commentBox}>comment</button>
    {this.state.commentBoxVisible ? <input onChange={this.addComment} value={this.state.comment}/> : null}
    </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <h2>Newsfeed</h2>
                Search: <input onChange={this.updateFilter} value={this.state.filter}/>
                <div>
                <div>{listItems}</div>
                <br/>
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
