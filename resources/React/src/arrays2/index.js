import React from 'react';
import HobbyPic from '../../../../public/images/hobby.jpg';
import ConfidencePic from '../../../../public/images/confidence.jpg';
import BattingPic from '../../../../public/images/batting.jpg';
import DancePic from '../../../../public/images/davidDance.jpeg';
import FoodPic from '../../../../public/images/food.jpg';
import FoisGrasPic from '../../../../public/images/foisGras.jpg';
import IllustratorPic from '../../../../public/images/illustrator.jpeg';
import PhotographyPic from '../../../../public/images/photography.jpeg';
import VeganPic from '../../../../public/images/vegan.jpg';
import VolunteerPic from '../../../../public/images/volunteer.jpg';
import AbroadPic from '../../../../public/images/abroad.jpeg';
import ComedyPic from '../../../../public/images/comedy.jpg';
import RunningPic from '../../../../public/images/running.jpg';
import WeddingPic from '../../../../public/images/wedding.jpeg';
import WorkPic from '../../../../public/images/work.jpeg';
import GamePic from '../../../../public/images/game.jpeg';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

type Props = {
  marketplacegoal_id: String
}

const imgData = [
    { id: 1,
      img: <img src={ComedyPic}/>
    },
    { id: 2,
      img: <img src={RunningPic}/>
    },
    { id: 3,
      img: <img src={BattingPic}/>
    },
    { id: 4,
      img: <img src={DancePic}/>
    },
    { id: 5,
      img: <img src={VolunteerPic}/>
    },
    { id: 6,
      img: <img src={PhotographyPic}/>
    },
    { id: 7,
      img: <img src={ConfidencePic}/>
    },
    { id: 8,
      img: <img src={WeddingPic}/>
    },
    { id: 9,
      img: <img src={FoisGrasPic}/>
    },
    { id: 10,
      img: <img src={VeganPic}/>
    },
    { id: 11,
      img: <img src={AbroadPic}/>
    },
    { id: 12,
      img: <img src={WorkPic}/>
    },
    { id: 13,
      img: <img src={GamePic}/>
    },
    { id: 14,
      img: <img src={HobbyPic}/>
    },
    { id: 15,
      img: <img src={IllustratorPic}/>
    },
  ]

  const styles = {
    imageStyle: {
    height: '180px'}
}

class ImgData2 extends React.Component {

  props:Props

  render () {

    const {
      marketplacegoal_id
    } = this.props;

    const listItems4 =
    <div>
    {imgData.filter((item) => {return item.id === this.props.marketplacegoal_id})
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
