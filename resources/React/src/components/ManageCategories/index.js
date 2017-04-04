import React from 'react';
import { mapStateToProps } from './connect';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

//map in component or container to list categories? could ask ryan
const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
class ManageCategories extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    catOpen: false,
    catListOpen: false
    }
  }

  catOpen = () => {
    this.setState({catOpen: true});
  }

  catClose = () => {
    this.setState({catOpen: false});
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
    const cats = [
      {category_id: 4, parent_cat: null, text: "task type"},
      {category_id: 1, parent_cat: 4, text:"UI", },
      {category_id: 2, parent_cat: 4, text: "back end"},
      {category_id: 3, parent_cat: 4, text: "user testing"},
      {category_id: 5, parent_cat: null, text: "effort estimation"},
      {category_id: 6, parent_cat: 5, text: "low"},
      {category_id: 7, parent_cat: 6, text: "medium"},
      {category_id: 8, parent_cat: 7, text: "high"}
    ];

    const catMap =
      cats.filter((cats)=> {return cats.parent_cat == null})
      .map((cats) =>
        <div style={styles.wrapper}>
          <Chip
            style={styles.chipStyle}
            onTouchTap={this.catListOpen}
            key={cats.category_id}
          >
            {cats.text}
          </Chip> <button>edit</button>
          <Popover open={this.state.catListOpen}
            animation={PopoverAnimationVertical}
            onRequestClose={this.catListClose}
            anchorEl={this.state.anchorEl}
          >
            <Menu>
                  <MenuItem primaryText="test 1" />
            </Menu>
          </Popover>
          <br/>
        </div>
    )
  ;

    const manageCatActions = [
      <div>
          Existing Categories: <br />
          {catMap}
          <TextField hintText="Category Name" /><br/>
          <TextField hintText="Category Member" /><br/>
          <RaisedButton
            label="Add Category"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.addCatLine}
          />
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

export default ManageCategories;
