import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//to do
//--get props to work and populate goals
//--get hyperlinks to work
//--get title from route via props and populate appBar title


type Props = {
  goal_name: String,
  goal_id: Number
};


class App2 extends React.Component {
  props: Props

  render() {
    const {
      goal_name,
      goal_id
    } = this.props;

    const menuItems =
          <div>
          {goal_name}
          {goal_id}
          hey
          </div>
          ;

    return (
      <MuiThemeProvider>
        <div>
          {menuItems}
        </div>
      </MuiThemeProvider>
    )
  }
}


export default App2;
