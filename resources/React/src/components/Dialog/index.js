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
  dialogOpen:Boolean
}

//to do
//overlay style - make it not grey out the background, google an example of using this in material-ui
//only to be shown at certain times, ie when a user is logged in

class DialogComponent extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        dialogOpen: this.props.dialogOpen,
      }
      this.dialogClose = this.dialogClose.bind(this);
    }

      dialogClose() {
      this.setState({dialogOpen: false})
    }

    render() {
      const {
        dialogText,
        actionMore,
        actionClose,
        dialogTitle,
        dialogOpen
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
          onTouchTap={this.dialogClose}
        />,
      ];

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
