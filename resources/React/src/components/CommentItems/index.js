import React from 'react';
import TextField from 'material-ui/TextField';


type Props = {
  commentText: String
}

const styles={
  inlineBlock2: {
    display:'inline-block'
  }
}

class CommentItems extends React.Component {
  props:Props
  render() {
    const {
      commentText
    } = this.props;

    const commentItem =
      <div>
        <TextField style={styles.inlineBlock2} defaultValue={commentText} />
        <TextField style={styles.inlineBlock2} />        
      </div>
    ;

    return (
      <div>
          {commentItem}
      </div>
    )
  }
}

export default CommentItems;
