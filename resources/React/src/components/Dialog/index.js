import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const styles= {
  dialogContentStyle: {
    width: '400px'
  },
  buttons: {
    fontWeight: 'bold'
  }
};

type Props = {

  dialogText:String,
  actionMore:String,
  actionClose:String,
  dialogTitle:String,
  dialogOpen:String,
  taskId:Number
}

//to do
//overlay style - make it not grey out the background, google an example of using this in material-ui
//only to be shown at certain times, ie when a user is logged in

class DialogComponent extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        dialogOpen: true,
        completedDialogOpen: false
      }
      this.dialogClose = this.dialogClose.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

      dialogClose() {
      this.setState({dialogOpen: null})
    }

    handleSubmit() {
      this.props.handleSubmit(this.props.taskId);
      // Assumes this will succeed which is a bad idea...
      this.dialogClose();
      this.setState({completedDialogOpen: true})
    }

    completedDialogClose() {
    this.setState({completedDialogOpen: false})
  }

    render() {
      const {
        dialogText,
        actionMore,
        actionClose,
        dialogTitle,
        dialogOpen,
        handleSubmit,
        taskId
      } = this.props;

      const actions = [
        <FlatButton
          label={actionClose}
          labelStyle={styles.buttons}
          primary={true}
          onTouchTap={this.dialogClose}
        />,
        <FlatButton
          label={actionMore}
          labelStyle={styles.buttons}
          primary={true}
          onTouchTap={this.handleSubmit}
        />,
      ];

      const completedDialog =
      <div>
        <Dialog
          open={this.state.completedDialogOpen}
          onRequestClose={this.completedDialogClose}
        />
      </div>;



      const dialogConst =
      <div>

          <Dialog
            open={this.state.dialogOpen}
            actions={actions}
            title={dialogTitle}
            contentStyle={styles.dialogContentStyle}
            modal={false}
            onRequestClose={this.dialogClose}
          >
          {dialogText}
          </Dialog>
      </div>
          ;

        return (
          <div>
            {dialogConst}
          </div>
        )
    }
}


export default DialogComponent;
