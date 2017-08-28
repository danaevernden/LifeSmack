import React from 'react';
import Divider from 'material-ui/Divider';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {Card,CardText,CardActions} from 'material-ui/Card';

type Props = {
  taskName: String,
  taskID: Number,
  goalID: Number,
  imageSrc: String
}

const styles={
  wrapper: {
    flexWrap: 'wrap',
    maxWidth: '350px',
    display: 'inline-block',
    textAlign: 'left'
  },
  taskCardStyle: {
    width: '400px'
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


class ListCardParent extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        taskName: this.props.taskName,
        taskStatusState: this.props.taskStatus,
        }
      }

    render() {
      const {
        taskName,
        taskID,
        goalID,
        imageSrc
      } = this.props;

      const taskCard =
        <div style={styles.wrapper}>
          <div style={styles.parentStyle}>
              <a href={'/goal/' + goalID + '/' + taskID}>
                <Card
                  style={styles.taskCardStyle}
                >
                    <CardText>
                        <img src={imageSrc} />
                        <div style={styles.inlineBlock2}>
                            {taskName}
                        </div>
                      </CardText>
                  </Card>
                  </a>
            </div>
          </div>
          ;

        return (
          <div>
              {taskCard}
          </div>
        )
    }
}

export default ListCardParent;

//old code
//        <Divider style={styles.divider}/>
