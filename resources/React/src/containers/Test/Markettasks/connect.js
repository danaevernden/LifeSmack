import fetchMarkettasks from '../../../actions/markettasks';
import fetchComments from '../../../actions/comments';

export const mapStateToProps = (state) => ({
  markettasks: state.markettasks.markettasks,
  comments: state.comments.comments,

});

export const mapDispatchToProps = (dispatch) => ({
  fetchMarkettasksFromActions: () => dispatch(fetchMarkettasks()),
  fetchCommentsFromActions: () => dispatch(fetchComments()),

});
