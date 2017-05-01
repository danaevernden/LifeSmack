import React from 'react';
import Divider from 'material-ui/Divider';

type Props = {
  message: String,
  itemsCount: Number
}

class NoResultsMessage extends React.Component {

  props: Props

  render() {
    const {
      itemsCount,
      message
    } = this.props;

      //commented out for testing
      //   let goalsCount = 3;
      const noResultsMessage =
      <div>
        <Divider />
        <br/>
        <div>{message} </div>
        <br/>
      </div>;

      return(
        <div>
        {itemsCount <= 0 ? {noResultsMessage} : null}
        </div>
      )

  }
}

export default NoResultsMessage;
