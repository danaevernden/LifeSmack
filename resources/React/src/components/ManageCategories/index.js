import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';import dueDateIcon from '../../../../../public/images/due date icon.png';
import logo from '../../../../../public/images/running.jpg';

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
type Props = {
  parent_cat: Number,
  category_id: Number,
  text: String,
  child_cat_id: Number,
  child_cat_text: String
}

class ManageCategories extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state = {
    editOpen: false,
    catListOpen: false
    }
  }

  editOpen = () => {
    this.setState({editOpen: true});
  }

  editClose = () => {
    this.setState({editOpen: false});
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
      parent_cat,
      category_id,
      text,
      child_cat_id,
      child_cat_text
    } = this.props;

    const manageCatEditActions = [
      <div>
      <TextField defaultValue={child_cat_text}/>
      <br />
       <RaisedButton
         label="Save"
         primary={true}
         keyboardFocused={true}
         onTouchTap={this.editClose}
       />
       <RaisedButton
         label="Cancel"
         primary={false}
         keyboardFocused={true}
         onTouchTap={this.editClose}
       />
      </div>
    ];

    const catMap2 =
        <div>
            <List>
                <ListItem
                    value={1}
                    primaryText="Brendan Lim"
                    leftAvatar={<Avatar src={logo} />}
                    nestedItems={[
                      <ListItem
                            value={2}
                            primaryText="Grace Ng"
                            leftAvatar={<Avatar src={logo} />}
                      />,
                    ]}
                />
              </List>
            </div>
      ;


    const catMap =
        <div style={styles.wrapper}>
          <Chip
            style={styles.chipStyle}
            onTouchTap={this.catListOpen}
            key={category_id}
          >
              {text}
          </Chip>
          <Popover open={this.state.catListOpen}
            animation={PopoverAnimationVertical}
            onRequestClose={this.catListClose}
            anchorEl={this.state.anchorEl}
          >
              <Menu>
                  <MenuItem primaryText={child_cat_text}/>
                  <MenuItem primaryText="edit" onTouchTap={this.editOpen}/>
                  <Dialog
                      title="Manage Category"
                      actions={manageCatEditActions}
                      modal={false}
                      open={this.state.editOpen}
                      onRequestClose={this.editClose}>
                  </Dialog>
              </Menu>
          </Popover>
          <br/>
        </div>
    ;

    return(
      <MuiThemeProvider>
          <div>
              {catMap2}
          </div>
      </MuiThemeProvider>
    );
  }
}

export default ManageCategories;
