import React from 'react';
import Chip from 'material-ui/Chip';
import { green500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import logo2 from '../../../../../public/images/runningMarket.jpg';
import logo3 from '../../../../../public/images/battingMarket.jpg';
import logo1 from '../../../../../public/images/comedyMarket.jpg';
import ImgData2 from '../../arrays';

type Props = {
  goalID: Number,
  goalName: String,
  marketItemName: String,
  category: String,
  planDescription: String,
  rating: String,
  marketplaceFlag: Boolean,
  imageID: String
}

class MarketplaceComponent extends React.Component {
    props: Props

   constructor(props) {
     super(props);
     this.state = {
       shadow: 'rgb(0,0,1)',
    }
   }
    onMouseOver = () => this.setState({ shadow: 3 });
    onMouseOut = () => this.setState({ shadow: 1 });

    render() {

      const {
        goalID,
        goalName,
        marketItemName,
        category,
        planDescription,
        rating,
        marketplaceFlag,
        imageID
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
        },
        titleStyle: {
            fontSize: '1.5vw',
          },
        titlebackground: {
            marginLeft: '4px'
          },
          tileStyle: {
            marginTop: '0px'
          },
          tileStyle2: {
            height: '180px'
          },
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          },
          imageStyle: {
            height: '180px'
          },
          mediaStyle: {
            height: '180px'
          }

      };

      const marketplace =
      <div style={styles.tileStyle}>

          <a href={'/marketplace/' + goalID} >

          <GridTile
            titleStyle={styles.titleStyle}
            key={goalID}
            title={goalName}
            style={styles.tileStyle2}
           >
           <div style={styles.imageStyle}>
           {imageID}
           </div>
           </GridTile>

            </a>
              <CardText>
              <b>{goalName} </b> <br/> <br/>
              <b>Description:</b> {planDescription}
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
