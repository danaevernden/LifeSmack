import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreMenu from 'material-ui/svg-icons/navigation/more-horiz';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionCommentOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import ActionComment from 'material-ui/svg-icons/communication/chat-bubble';
import Assignment from 'material-ui/svg-icons/action/assignment';

type Props = {
  taskID: Number
}

class TaskMenu extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state= {
      commentOpen: null,
      categoryOpen: null
    }
    this.openComment = this.openComment.bind(this);
    this.openCategory = this.openCategory.bind(this);
  }

  render() {
    const {
      taskID
    } = this.props;

    return (
      <BottomNavigation>
          {this.state.commentOpen === taskID ?
              <BottomNavigationItem label="comments" icon={<ActionCommentOutline />} onClick={() => this.openComment()} />
          :
          <BottomNavigationItem label="comments" icon={<ActionComment />} onClick={() => this.openComment(taskID)} />
          }
          {this.state.categoryOpen === taskID ?
              <BottomNavigationItem icon={<Assignment />} label="categories" onClick={() => this.openCategory()}/>
          :
              <BottomNavigationItem icon={<Assignment />} label="categories" onClick={() => this.openCategory(taskID)}/>
          }
          <IconMenu
               iconButtonElement={<BottomNavigationItem label="options" icon={<MoreMenu />}></BottomNavigationItem>}
               anchorOrigin={{horizontal: 'left', vertical: 'top'}}
               targetOrigin={{horizontal: 'left', vertical: 'top'}}
             >
               <MenuItem primaryText="Delete Task" />
               <MenuItem primaryText="Schedule" />
          </IconMenu>
      </BottomNavigation>

    );
  }
}

export default TaskMenu;
