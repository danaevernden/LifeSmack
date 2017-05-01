import React from 'react';
import Chip from 'material-ui/Chip';
import { green500, grey500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';


type Props = {
  goalID: Number,
  goalName: String,
  specialistID: String,
  marketItemName: String,
  category: String,
  planDescription: String,
  rating: String,
  marketplaceFlag: Boolean
}

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '45%'
  }
}

class MarketplaceComponent extends React.Component {
    props: Props

    render() {
      const {
        goalID,
        goalName,
        specialistID,
        marketItemName,
        category,
        planDescription,
        rating,
        marketplaceFlag
      } = this.props;

      const marketplace =
      <div>
          <a href={'/marketplace/' + goalID}>
            <CardTitle title={goalName} subtitle={marketItemName} />
          </a>
        <CardText>Description: {planDescription}
        {marketplaceFlag ?
          <Chip style={styles.chipStyle} backgroundColor={green500}>{category}</Chip>
        : null}
        Rating: {rating}
        <br/>
        by: {marketItemName}
        </CardText>
        <CardActions>
        <FlatButton href={'/marketplace/' + goalID} label="See more" />
        </CardActions>
        <Divider />
      </div>;

      return (
        <div>
            {marketplace}
        </div>
      )
  }
}

export default MarketplaceComponent;
