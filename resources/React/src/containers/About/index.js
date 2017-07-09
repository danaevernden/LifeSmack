/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//to do
//--figure out how to put this back in:
//<NoResultsMessage
//itemsCount={listItems.length}
//message={"No results match your search :("}
///>

const styles = {
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '100px'
  },
  contactUs: {
    color: 'rgb(207,37,37)',
    fontWeight: 'bold'
  }
}


class About extends React.Component{

  constructor(props){
    super(props)
    this.state= {
    }
  }


render () {


    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <MuiThemeProvider>
                <div style={styles.topMenu}>
                    Have a question or want to give us feedback?
                    <br/><br/>
                    <a href="mailto:contactus@lifesmack.com" style={styles.contactUs}>Contact Us</a>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}



export default About;
//connect merges objects into one and passes it into newsfeed as props
