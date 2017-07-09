import React from 'react';
import Chip from 'material-ui/Chip';
import { green500, grey500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import ComedyPic from '../../../../../public/images/comedy.jpg';
import BattingPic from '../../../../../public/images/batting.jpg';
import RunningPic from '../../../../../public/images/meb.jpg';


type Props = {
  goalID: Number,
  goalName: String,
  specialistID: String,
  marketItemName: String,
  category: String,
  planDescription: String,
  rating: String,
  marketplaceFlag: Boolean,
  image: String
}



class MarketplaceComponent extends React.Component {
    props: Props

   constructor(props) {
     super(props);
     this.state = { shadow: 'rgb(0,0,1' }
   }
    onMouseOver = () => this.setState({ shadow: 3 });
    onMouseOut = () => this.setState({ shadow: 1 });

    render() {
      const {
        goalID,
        goalName,
        specialistID,
        marketItemName,
        category,
        planDescription,
        rating,
        marketplaceFlag,
        image
      } = this.props;

      const styles = {
        chipStyle: {
        margin: 4},
        wrapper: {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: '45%'
        },
        overlayStyle: {
          color: 'rgb(0,0,1)'
        }
      };

      const marketplace =
      <div>
        <a href={'/marketplace/' + goalID}>
          <CardMedia
          mediaStyle={styles.mediaStyle}>
              <img src={image}/>
          </CardMedia>
          </a>
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

        <Divider />
      </div>;

      return (
        <div>
        <Card
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          zDepth={this.state.shadow}
        >

            {marketplace}
        </Card>
        </div>
      )
  }
}

export default MarketplaceComponent;
