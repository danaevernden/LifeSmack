import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

//need to figure out how to update state/props of 'checked' variable
//so it can be used by parent index
class CheckboxButton extends React.Component {
constructor(props){
  super(props)
  this.state= {
    checked: true
  }
  this.updateCheckbox = this.updateCheckbox.bind(this);
}

updateCheckbox() {
  this.setState({checked: !this.state.checked});
}
render() {
    return(<MuiThemeProvider>
        <Checkbox onCheck={this.updateCheckbox} />
    </MuiThemeProvider>
    );
  }
}
export default CheckboxButton;
