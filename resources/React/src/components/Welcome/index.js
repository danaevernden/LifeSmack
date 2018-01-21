import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

import SelectField from 'material-ui/SelectField';
//to do
//figure out how to pass categories table down to categoryItems, and then map through categoryparents and children to create dropdowns
//add if statement to change sortOption based on what button is clicked

const styles = {
  slider: {
    width: '300px',
  },
  sliderStyle: {
      margin: 'auto',
      marginLeft: '30%'
    },
  dropdown: {
    width: '200px'
  },
  dropdownProject: {
    width: '500px'
  },
  contentStyle: {
    maxHeight: 'none',
    transform: 'none',
    width: '60%',
  },
};

class Welcome extends React.Component{

  props:Props

  constructor(props){
    super(props)
      this.state= {
        open: true,
        activeSlide: 1,
        timeValue: null,
        locValue: null
      }
      this.changeSlidePlus = this.changeSlidePlus.bind(this);
      this.changeSlideMinus = this.changeSlideMinus.bind(this);
    }

    handleLocChange = (event, index, locValue) => this.setState({locValue});
    handleTimeChange = (event, index, timeValue) => this.setState({timeValue});
    handleClose() {this.setState({open:false})}

    changeSlidePlus() {
      var count = this.state.activeSlide + 1;
      {this.state.activeSlide === 7 ? null :
          this.setState({activeSlide: count})
      }
    }
    changeSlideMinus() {
      var count = this.state.activeSlide - 1;
      {this.state.activeSlide === 1 ? null :
          this.setState({activeSlide: count})
      }
    }

  render() {

    const {

    } = this.props;

    const slide1 =
    <div>
    <b> Welcome back! </b><br/><br/>
      Tell me how youre REALLY feeling.
      <br/><br/>Hows yo brain?<br/>
      Fried, Aight, Elon Musk
        <Slider
          step={0.5}
          value={0.5}
          style={styles.slider}
          sliderStyle={styles.sliderStyle}
        />
        <br/>
      Hows that bod doing?<br/>
      Couch potato, Aight, Simone Biles
        <Slider
          step={0.5}
          value={0.5}
          style={styles.slider}
          sliderStyle={styles.sliderStyle}
        />
    </div>
  ;

  const slide2 =
  <div>
      How much time have you got?
      <DropDownMenu
        value={this.state.timeValue}
        onChange={this.handleTimeChange}
        style={styles.dropdownProject}
      >
         <MenuItem value={1} primaryText="less than 15 mins" />
         <MenuItem value={2} primaryText="30 mins" />
         <MenuItem value={3} primaryText="an hour" />
         <MenuItem value={4} primaryText="1-2 hours" />
         <MenuItem value={5} primaryText="an afternoon/morning/evening" />
         <MenuItem value={6} primaryText="all damn day, baby" />
      </DropDownMenu>
      <br/><br/>
      Where are you?
      <DropDownMenu
        value={this.state.locValue}
        onChange={this.handleLocChange}
        style={styles.dropdownProject}
      >
         <MenuItem value={1} primaryText="on the train" />
         <MenuItem value={2} primaryText="at home" />
         <MenuItem value={3} primaryText="walkin around/driving" />
         <MenuItem value={4} primaryText="at work" />
         <MenuItem value={5} primaryText="out n about" />
      </DropDownMenu>
      <Toggle
        label="Wifi?"
      />
  </div>;

  const slide3 =
  <div>
      Any particular project you want to work on?
      <DropDownMenu
        value={this.state.timeValue}
        onChange={this.handleTimeChange}
        style={styles.dropdownProject}
      >
         <MenuItem value={1} primaryText="Run NYC Marathon" />
         <MenuItem value={2} primaryText="Build Lifesmack" />
         <MenuItem value={3} primaryText="Odds and ends" />
         <MenuItem value={4} primaryText="Actually I kinda wanna just do nothing" />
      </DropDownMenu>

  </div>;

  const slide4 =
  <div>
  Heres what you can work on:
  add listcard component here, use a Connect page to pull the right tasks? taskcard will use listcard too
  </div>

    const Welcome =
    <div>
      <Dialog
        open={this.state.open}
        onRequestClose={this.handleClose}
        contentStyle={styles.contentStyle}
        autoScrollBodyContent={true}
        bodyStyle={styles.contentStyle2}
      >
      <div>
      {this.state.activeSlide === 1 ?
        <div>{slide1}</div> :
          [this.state.activeSlide === 2 ?
          <div>{slide2}</div> :
              (this.state.activeSlide === 3 ?
              <div>{slide3}</div> :
                  (this.state.activeSlide === 4 ?
                    <div>{slide4}</div> : null
                  )
              )
          ]
        }
      </div>
      <FlatButton
        label="Back"
        labelPosition="after"
        primary={true}
        onClick={this.changeSlideMinus}
        icon={<ArrowLeft/>}
      />
      <FlatButton
        label="Next"
        labelPosition="before"
        primary={true}
        onClick={this.changeSlidePlus}
        icon={<ArrowRight/>}
      />
      </Dialog>
    </div>
    ;


    return (
      <div className='App-page' >
        <div className='App-content'>
            {Welcome}
        </div>
      </div>
    );
  }
}


export default Welcome;
