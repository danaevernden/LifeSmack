import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const styles= {
  dialogContentStyle: {
    width: '400px'
  }
};

type Props = {
  dialogText:String,
  actionMore:String,
  actionClose:String
}

class DialogComponent extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        dialogOpen: false,
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
        actionClose
      } = this.props;

      const actions = [
        <FlatButton
          label={actionClose}
          primary={true}
          onTouchTap={this.dialogClose}
        />,
        <FlatButton
          label={actionMore}
          primary={true}
          onTouchTap={this.dialogClose}
        />,
      ];

      const dialogConst =
      <div>

          <Dialog
            open={this.state.dialogOpen}
            actions={actions}
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
