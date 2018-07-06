import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import logo from '../../../../../public/images/running.jpg';


type Props = {
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
    } = this.props;

    const catMap =
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

  return(
      <MuiThemeProvider>
          <div>
              {catMap}
          </div>
      </MuiThemeProvider>
    );
  }
}

export default ManageCategories;
