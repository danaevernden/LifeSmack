import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import sports from '../../../../public/images/running.jpg';
import food from '../../../../public/images/food.jpg';
import arts from '../../../../public/images/arts.jpeg';
import recreation from '../../../../public/images/recreation.jpeg';
import social from '../../../../public/images/social.jpeg';
import travel from '../../../../public/images/travel.jpeg';
import Link from 'react-router';



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

  const styles = {
    imageStyle: {
    height: '180px'}
}

class MarketTypesData extends React.Component {

  props:Props

  render () {

    const listItems4 =
    <div>
    {tilesData.filter((item) => {return item.id === this.props.marketplacegoal_id})
    .map((item) => (
    item.img
    ))}

    </div>;

    return (
      <MuiThemeProvider>
      <div style={styles.imageStyle}>
        {listItems4}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default MarketTypesData;
