import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {Card, CardActions} from 'material-ui/Card';

type Props = {
  taskName: String,
  taskID: Number,
  categoryID1: Number,
}

const styles={
  wrapper: {
    flexWrap: 'wrap',
    marginLeft: '20%',
    marginRight: '20%',
    maxWidth: '350px',
    display: 'inline-block',
    textAlign: 'left'
  },
  parentStyle: {
    display: 'inline-block',
    textAlign: 'left'
  },
  checkboxCompleted: {
    display: 'inline-block',
    height: '10px',
    position: 'absolute',
    paddingTop: '15px',
    marginLeft: '-20px'
  },
  inlineBlock2: {
    display:'inline-block'
  },
  textboxStyle: {
    display: 'inline-block',
    marginLeft: '20px'
  },
  textboxFontStyle: {
    fontSize: '14px'
  },
  chipStyle: {
  margin: 4},
  iconStyle: {
    minWidth: '40px',
    width: '40px',
    zIndex: 'unset'
  },
  divider: {
    color: 'rgb(0,0,0)'
  }
}

class MarketplaceListCard extends React.Component {
    props: Props


    constructor(props){
      super(props)
      this.state= {
            }
      }

    render() {
      const {
        taskName,
        taskID,
        categoryID1,
      } = this.props;

    const taskCard =
      <div style={styles.wrapper}>
          <div style={styles.parentStyle}>
              <div style={styles.inlineBlock2}>
                  <Card>
                      <TextField
                          style={styles.textboxStyle}
                          inputStyle={styles.textboxFontStyle}
                          defaultValue={taskName}
                          multiLine={true}
                          rowsMax={4}
                          disabled={true}
                          id="text-field-disabled"
                      />
                  </Card>
                </div>
            </div>
        </div>
  ;

  return (
      <div>
          <Divider style={styles.divider}/>
          {taskCard}
      </div>
    )
  }
}

export default MarketplaceListCard;
