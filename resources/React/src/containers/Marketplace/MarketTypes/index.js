import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import comedy from '../../../../../../public/images/comedy.jpg';
import running from '../../../../../../public/images/running.jpg';
import batting from '../../../../../../public/images/batting.jpg';
import { Link } from 'react-router';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  cardStyle: {
    boxSizing: 'border-box',
    padding: '2px',
    height: '184px'
  },
};

const battingImg = <img src={batting}/>;

const tilesData = [
  {
    key: 1,
    img: <img src={batting}/>,
    title: 'Social',
    author: 'jill111',
    link: <Link to="/marketplace/social" />,
  },
  {
    key: 2,
    img: <img src={comedy}/>,
    title: 'Sports',
    author: 'pashminu',
    link: <Link to="/marketplace/sports" />,
  },
  {
    key: 3,
    img: <img src={running}/>,
    title: 'Recreation',
    author: 'Danson67',
    link: <Link to="/marketplace/recreation" />,
  },
  {
    key: 4,
    img: <img src={comedy}/>,
    title: 'Arts',
    author: 'fancycrave1',
    link: <Link to="/marketplace/arts" />,
  },
  {
    key: 5,
    img: <img src={batting}/>,
    title: 'Travel & Outdoors',
    author: 'Hans',
    link: <Link to="/marketplace/batting" />,
  },
  {
    key: 6,
    img: <img src={running}/>,
    title: 'Food & Drink',
    author: 'fancycravel',
    link: <Link to="/marketplace/fooddrink" />,
  },
];


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const MarketTypes2 = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <Card style={styles.cardStyle}>
        <a href={tile.link}>
          <CardMedia>
            {tile.img}
          <CardTitle
              title={tile.title}
            />
          </CardMedia>
            </a>
        </Card>
      ))}
    </GridList>
  </div>
);

const MarketTypes = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.key}
          containerElement={tile.link}
          title={tile.title}
        >
          {tile.img}
        </GridTile>
      ))}
    </GridList>
  </div>
);


export default MarketTypes;
