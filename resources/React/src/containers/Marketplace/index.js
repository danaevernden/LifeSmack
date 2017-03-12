/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';

class Marketplace extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: ""
    }

    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  render() {

    const listItems = this.props.marketplace.filter((item) => {
      if (this.state.filter) {
        return item.marketplace.startsWith(this.state.filter);
      }

      return true;
    })
    .map((marketplace) =>
    <li>{marketplace.name} {marketplace.goal} / reviews / likes </li>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <h2>Marketplace</h2>
                <input onChange={this.updateFilter} value={this.state.filter}/>
                <ul>{listItems}</ul>
          </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps
)(Marketplace);
//connect merges objects into one and passes it into newsfeed as props
