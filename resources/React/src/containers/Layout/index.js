import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardMedia, CardActions, CardTitle} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

type Props = {
  title: String,
  subtitle: String,
  tabOne: String,
  tabTwo: String,
  tabOneContent: String,
  tabTwoContent: String,
  imageID: String
};

const styles = {
  cardStyle: {
    width: '400px',
    display: 'inline-block',
    height: '400px',
    position: 'relative',
    backgroundColor: 'rgb(255,255,255)',
/*    marginLeft: '300px',*/
    marginTop: '40px'
  },
  titleStyle: {
    marginLeft: '0px',
    marginRight: '40%',
    position: 'fixed',
  },
  titleStyleText: {
    fontSize: '15px',
    marginLeft: '20px',
    marginRight: '-70px',
    lineHeight: '20px',
    marginTop: '20px',
    marginBottom: '10px'
  },
  subtitleStyle: {
    marginBottom: '40px'
  },
  mediaStyle: {
    float:'right',
    width:'160px',
    marginRight: '20px',
    marginTop: '20px',
    marginBottom: '40px'
  },
  buttonStyle: {
    float:'right',
    width: '160px',
    marginRight: '10px',
    marginLeft: '160px',
    marginTop: '-35px',
    color: 'black'
  },
  leftContentStyle: {
    float:'left',
    width: '160px',
    marginRight: '230px',
    marginTop: '10px',
  },
  buttonBackgroundStyle: {
    color: 'rgb(127,242,185)'
  },
  tabStyle: {
    width: '400px',
    display: 'inline-block',
    position: 'fixed',
    marginLeft: '-195px',
  },
  tabItemContainerStyle : {
    backgroundColor: 'white'
  },
  paperStyle: {
    height: '400px',
    overflow: 'auto'
  },
  inkBarStyle: {
    background: 'rgb(127,242,185)'
  },
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
      tabOne,
      tabTwo,
      tabOneContent,
      tabTwoContent,
      imageID
    } = this.props;

    const tabMenu = (
      <Tabs
      tabItemContainerStyle={styles.tabItemContainerStyle}
      contentContainerStyle={styles.tabStyle}
      inkBarStyle={styles.inkBarStyle}
      >
          <Tab
          label={tabOne}
          buttonStyle={styles.buttonStyle}
          >
            <div>
                {tabOneContent}
            </div>
          </Tab>
          <Tab
          label={tabTwo}
          buttonStyle={styles.buttonStyle}
          >
            <div>
              <Paper style={styles.paperStyle}>
                {tabTwoContent}
              </Paper>
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
          {imageID}
          </CardMedia>
          <CardActions>

              {tabMenu}
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
