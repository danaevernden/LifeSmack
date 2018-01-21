import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TourComponent from '../../components/Tour';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import check from '../../../../../public/images/marketplace task icon.png';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Welcome from '../../components/Welcome';

const styles = {
  arrows: {
    display: 'inline-block',
    marginLeft: '300px',
    marginTop: '-80px',
    height: 100,
    width: 100
  },
  contactStyle: {
    display: 'inline-block',
    marginLeft: '300px'
  },
  contactUs: {
    color: 'rgb(207,37,37)',
    fontWeight: 'bold'
  }
}

class Tour extends React.Component{
  props: Props

  constructor(props){
    super(props)
    this.state= {
      activeSlide: 1,
    }
    this.changeSlidePlus = this.changeSlidePlus.bind(this);
    this.changeSlideMinus = this.changeSlideMinus.bind(this);
    }

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

    const slide1 =
    <div>
    <TourComponent
      logo={check}
      title={"Let's get to work!"}
      text={'LifeSmack is a goal setting app that allows you to capture, track, and focus on goals that matter to you!'}
      />
    </div>;

    const slide2 =
    <div>
    <TourComponent
      logo={check}
      title={"Add Goals"}
      text={'Have a goal in mind but need the motivation and support to make it a reality?'}
      />
    </div>;

    const slide3 =
    <div>
    <TourComponent
      logo={check}
      title={"Add Tasks"}
      text={'How difficult will it be to reach your goal? What are the smaller tasks along the way to your end goal?'}
      />
    </div>;

    const slide4 =
    <div>
    <TourComponent
      logo={check}
      title={"Mark Your Calendar"}
      text={'Add due dates to your goals and tasks to help keep yourself on track'}
      />
    </div>;

    const slide5 =
    <div>
    <TourComponent
      logo={check}
      title={"Stay Organized"}
      text={'Categories help you stay productive and on track to complete your goal'}
      />
    </div>;

    const slide6 =
    <div>
    <TourComponent
      logo={check}
      title={"Start From Success"}
      text={'No need to reinvent the wheel! Use goal plans designed by experts that have completed the same goals as you.'}
      />
    </div>;

    const show =
    <div>
    {this.state.activeSlide === 1 ?
      <div>{slide1}</div> :
        [this.state.activeSlide === 2 ?
        <div>{slide2}</div> :
            (this.state.activeSlide === 3 ?
            <div>{slide3}</div> :
                (this.state.activeSlide === 4 ?
                  <div>{slide4}</div> :
                    (this.state.activeSlide === 5 ?
                      <div>{slide5}</div> :
                        (this.state.activeSlide === 6 ?
                          <div>{slide6}</div> : <div>{slide1}</div>
                        )
                    )
                )
            )
        ]
    }
    </div>;

    return (
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
                  <div>
                      {show}
                      <br/>
                      <div style={styles.arrows}>
                          <IconButton
                              onClick={this.changeSlideMinus}
                          >
                              <ArrowLeft/>
                          </IconButton>
                          <IconButton
                              onClick={this.changeSlidePlus}
                          >
                            <ArrowRight/>
                        </IconButton>
                    </div>
                    <br/><br/>
                    <div style={styles.contactStyle}>
                        Have a question or want to give us feedback?
                        <br/><br/>
                        <a href="mailto:contactus@lifesmack.com" style={styles.contactUs}>Contact Us</a>
                    </div>
                      {show}
                    </div>
                </MuiThemeProvider>
            </div>
      </div>
    );
  }
}

export default Tour;


/*
arrowLeftOld: {
  width: '125px',
  display: 'flex',
  height: '125px',
  position: 'relative',
  marginLeft: '0px',
  marginTop: '-250px',
  zIndex: '2'
},

  arrowRight: {
    width: 125,
    height: 125,
    zIndex: 1000,
    marginLeft: '-250px',
    marginTop: '-250px',
    position: 'absolute'
  },
  arrowLeft: {
    width: 125,
    height: 125,
    zIndex: 1000,
    marginLeft: '100px',
    marginTop: '250px',
    position: 'absolute'
  },
  arrowLeftStyle: {
    zIndex: 1000,
    marginLeft: '100px',
    marginTop: '250px',
    position: 'absolute'
  },
  arrowRightStyle: {
    zIndex: 1000,
    marginLeft: '100px',
    marginTop: '250px',
    position: 'absolute'
  },
  <div>hey: {this.state.activeSlide} </div>
  </div>

*/
