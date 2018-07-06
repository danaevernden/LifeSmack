import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import sports from '../../../../../../public/images/running.jpg';
import { Link } from 'react-router';
//new images
import food from '../../../../../../public/images/food.jpg';
import arts from '../../../../../../public/images/arts.jpeg';
import recreation from '../../../../../../public/images/recreation.jpeg';
import social from '../../../../../../public/images/social.jpeg';
import travel from '../../../../../../public/images/travel.jpeg';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
  },
  cardStyle: {
    boxSizing: 'border-box',
    padding: '2px',
    height: '184px'
  },
};


const tilesData = [
  {
    key: 1,
    img: <img role="presentation" src={social}/>,
    title: 'Social',
    link: <Link to="/marketplace/social" />,
  },
  {
    key: 2,
    img: <img role="presentation" src={sports}/>,
    title: 'Sports',
    link: <Link to="/marketplace/sports" />,
  },
  {
    key: 3,
    img: <img role="presentation" src={recreation}/>,
    title: 'Recreation',
    link: <Link to="/marketplace/recreation" />,
  },
  {
    key: 4,
    img: <img role="presentation" src={arts}/>,
    title: 'Arts',
    link: <Link to="/marketplace/arts" />,
  },
  {
    key: 5,
    img: <img role="presentation" src={travel}/>,
    title: 'Travel & Outdoors',
    link: <Link to="/marketplace/travel" />,
  },
  {
    key: 6,
    img: <img role="presentation" src={food}/>,
    title: 'Food & Drink',
    link: <Link to="/marketplace/food" />,
  },
];

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
