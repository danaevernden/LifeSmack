import { connect } from 'react-redux';
import React from 'react';
import Homepage from '../../components/Homepage';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 100,
  width: 100,
  margin: "1em",
  textAlign: 'center',
  display: 'inline-block',
};

class PaperExampleSimple extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Paper style={style} zDepth={1} />
          <Divider />
          <Paper style={style} zDepth={2} />
          <Paper style={style} zDepth={3} />
          <Paper style={style} zDepth={4} />
          <Paper style={style} zDepth={5} />
      </div>
    )
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <app>
          <br/>
          <MuiThemeProvider>
            <div>
              <PaperExampleSimple />
            </div>
          </MuiThemeProvider>
      </app>
    )
  }
};

export default Test;
