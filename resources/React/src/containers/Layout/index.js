import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfilePic from '../../../../../public/images/comedy.jpg';
import {Card, CardMedia, CardActions, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import Favorite from 'material-ui/svg-icons/action/favorite';
import { Link } from 'react-router';


type Props = {
  title: String,
  subtitle: String,
  buttonTitle: String,
  buttonAction: String,
  tabOne: String,
  tabTwo: String,
  tabThree: String,
  tabOneContent: String,
  tabTwoContent: String,
  tabThreeContent: String
};

const styles = {
  cardStyle: {
    width: '400px',
    display: 'inline-block',
    height: '250px',
    position: 'fixed',
    backgroundColor: 'rgb(255,255,255)',
    marginLeft: '-200px',
    marginTop: '40px'
  },
  titleStyle: {
    marginLeft: '20px',
   marginRight: '40%',
    position: 'fixed'
  },
  titleStyleText: {
    fontSize: '24px',
    marginLeft: '20px',
    marginRight: '140px',
  },
  subtitleStyle: {
  marginRight: '40%'
  },
  mediaStyle: {
    float:'right',
    width:'160px',
    marginRight: '20px',
    marginTop: '20px'
  },
  buttonStyle: {
    float:'right',
    width: '160px',
    marginRight: '10px',
    marginLeft: '160px',
    marginTop: '-35px',
  },
  leftContentStyle: {
    float:'left',
    width: '160px',
    marginRight: '230px',
    marginTop: '10px',
  },
  buttonBackgroundTyle: {
    color: 'rgb(127,242,185)'
  }
};

class Layout extends React.Component{
  props: Props

  constructor(props){
    super(props)
    this.state= {
      sortOption: 1,
      leftContent: this.props.leftContent
      }
    }

    handleChange = (event, index, sortOption) => this.setState({sortOption});

  render() {

    const {
      title,
      subtitle,
      buttonTitle,
      buttonAction,
      tabOne,
      tabTwo,
      tabThree,
      tabOneContent,
      tabTwoContent,
      tabThreeContent
    } = this.props;

    const marketitem = (
      <div style={styles.leftContentStyle}>
      <FlatButton style={styles.buttonBackgroundTyle}>Add Goal</FlatButton>
      <Favorite />
      </div>
    );

    const account = (
      <div style={styles.leftContentStyle}>
      <FlatButton style={styles.buttonBackgroundTyle}>Log off</FlatButton>
      </div>
    );

    const taskListDropdown = (

      <div>
      <DropDownMenu style={styles.leftContentStyle} value={this.state.sortOption} onChange={this.handleChange}>
          <MenuItem value={1} onClick={()=>this.sortOptionSelection(1)} primaryText="Sort By" />
           <MenuItem value={2} onClick={()=>this.sortOptionSelection(2)} primaryText="Date" />
           <MenuItem value={3} onClick={()=>this.sortOptionSelection(3)} primaryText="Task Type" />
           <MenuItem value={4} onClick={()=>this.sortOpetionSelection(4)} primaryText="Effort Level" />
      </DropDownMenu>
      </div>
  );

    const tabsExample = (

      <Tabs>
          <Tab label={tabOne}>
            <div>
              {tabOneContent}
            </div>
          </Tab>
          <Tab label={tabTwo} >
            <div>
              {tabTwoContent}
            </div>
          </Tab>
          <Tab label={tabThree} >
            <div>
              {tabThreeContent}
            </div>
          </Tab>
      </Tabs>
    );


    const layoutTop = (
    <div >
      <Card style={styles.cardStyle}>
        <CardTitle
        title={title}
        subtitle={subtitle}
        style={styles.titleStyle}
        titleStyle={styles.titleStyleText}
        subtitleStyle={styles.subtitleStyle}
        />
        <CardMedia
        mediaStyle={styles.mediaStyle}
        >
        <img src={ProfilePic}/>
        </CardMedia>
        <CardActions>
        {this.state.leftContent === "taskListDropdown" ?
        <div>{taskListDropdown}</div>
        :
        <div>
          {this.state.leftContent === "marketitem" ?
            <div>{marketitem}</div>
        : null }
        {this.state.leftContent === "account" ?
          <div>{account}</div>
      : null }
        </div>
        }
          <FlatButton
          label={buttonTitle}
          containerElement={<Link to={buttonAction} />}
          style={styles.buttonStyle}
          backgroundColor={styles.buttonBackgroundTyle}
          />
          {tabsExample}
        </CardActions>
      </Card>
    </div>);

    return (
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
                <div>
                  {layoutTop}
                  <div>
                  </div>
                </div>
              </MuiThemeProvider>
            </div>
      </div>
    );
  }
}

export default Layout;
