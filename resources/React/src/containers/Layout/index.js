import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfilePic from '../../../../../public/images/comedy.jpg';
import {Card, CardMedia, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

type Props = {
  main: any,
  title: String,
  subtitle: String,
  buttonTitle: String
};

const styles = {
  cardStyle: {
    width: '400px',
    display: 'inline-block',
    height: '250px'
  },
  titleStyle: {
    marginLeft: '20px',
    marginRight: '40%',
    position: 'absolute'
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
      }
    }

  render() {

    const {
      main,
      title,
      subtitle,
      buttonTitle
    } = this.props;

    const layoutTop = (
    <div>
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
          <FlatButton
          label={buttonTitle}
          style={styles.buttonStyle}
          backgroundColor={styles.buttonBackgroundTyle}
          />
        </CardActions>
      </Card>
    </div>);

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
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
