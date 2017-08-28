import React from 'react';
import Chip from 'material-ui/Chip';
import { green500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import logo from '../../../../../public/images/running.jpg';

type Props = {
  goalID: Number,
  goalName: String,
  marketItemName: String,
  category: String,
  planDescription: String,
  rating: String,
  marketplaceFlag: Boolean
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
        marketItemName,
        category,
        planDescription,
        rating,
        marketplaceFlag
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
          }
      };

      const marketplace =
      <div style={styles.tileStyle}>
        <GridList
          cols={2}
          cellHeight={180}

          titleBackground={styles.titleBackground}
        >
          <a href={'/marketplace/' + goalID} >

          <GridTile
            titleStyle={styles.titleStyle}
            key={goalID}
            title={goalName}
           >
              <img src={logo} />
           </GridTile>
            <CardMedia
              mediaStyle={styles.mediaStyle}>
            </CardMedia>
            </a>
              <CardText><b>Description:</b> {planDescription}
                  {marketplaceFlag ?
                    <Chip style={styles.chipStyle} backgroundColor={green500}>{category}</Chip>
                  : null}
                  Rating: {rating}
                  <br/>
                  by: {marketItemName}
              </CardText>
          </GridList>
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
