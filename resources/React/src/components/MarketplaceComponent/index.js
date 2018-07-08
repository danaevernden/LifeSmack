import React from 'react';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {GridTile} from 'material-ui/GridList';


type Props = {
  goalID: Number,
  goalName: String,
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
            fontSize: '16px',
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
           {imageID}
           </GridTile>

            </a>

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
