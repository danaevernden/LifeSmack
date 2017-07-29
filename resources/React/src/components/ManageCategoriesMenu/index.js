import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

//map in component or container to list categories? could ask ryan


type Props = {
  cats: String
}

class ManageCategoriesMenu extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state = {
    catOpen: false,
    addCatOpen: false,
    catListOpen: false
    }
  }

  catOpen = () => {
    this.setState({catOpen: true});
  }
  catClose = () => {
    this.setState({catOpen: false});
  }
  addCatOpen = () => {
    this.setState({addCatOpen: true});
  }
  addCatClose = () => {
    this.setState({addCatOpen: false});
  }
  addCatLine = () => {
    this.setState({catLineCount: 2})
  }

  catListOpen = (event) => {
    this.setState({catListOpen: true,
    anchorEl: event.currentTarget})
  }
  catListClose = () => {
    this.setState({catListOpen: false})
  }
  render () {
    const {
      cats
    } = this.props;

    const addCategory = [
        <div>
            <TextField hintText="Category Name" /><br/>
            <TextField hintText="Category Member" /><br/>
            <RaisedButton
              label="Save"
              primary={true}
              keyboardFocused={true}
              onTouchTap={this.addCatClose}
            />
            <RaisedButton
              label="Cancel"
              primary={false}
              keyboardFocused={true}
              onTouchTap={this.addCatClose}
            />
        </div>
    ];

    const manageCatActions = [
      <div>
          Existing Categories: <br />
          {cats}
        <RaisedButton
            label="Add Category"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.addCatOpen}
          />
              <Dialog
              title="Add Category"
              actions={addCategory}
              modal={false}
              open={this.state.addCatOpen}
              onRequestClose={this.addCatClose}>
              </Dialog>
          <RaisedButton
            label="Save"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.catClose}
          />
          <RaisedButton
            label="Cancel"
            primary={false}
            keyboardFocused={true}
            onTouchTap={this.catClose}
          />
      </div>
    ];

    return(
      <MuiThemeProvider>
          <div>
            <RaisedButton label={"Manage Categories"} onTouchTap={this.catOpen} />
            <Dialog
            title="Manage Categories"
            actions={manageCatActions}
            modal={false}
            open={this.state.catOpen}
            onRequestClose={this.catClose}>
            </Dialog>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default ManageCategoriesMenu;
