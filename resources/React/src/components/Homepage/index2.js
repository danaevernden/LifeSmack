import React, { Component } from 'react';
import logo from './LogoSmallCondensed.jpg';
import AppBar from 'material-ui/AppBar'
import Counter from '../Counter'
import './style.css';

class Homepage extends Component {

  render() {
    const {
      showSiteTitle
    } = this.props;

    return (
      <div className="titlemain">
        <div className="nav">
        <a href='/join' className="nav2" className="hvr-underline-from-left">
          Link Here
        </a>
        -
        <a href='/'>
          <img src={logo} className="logo"/>
        </a>
        -
        <a href="/profile" class ="nav2" class="hvr-underline-from-left">
        Profile
        </a>
        </div>
        <Counter/>
      </div>

    );
  }
}

export default Homepage;
