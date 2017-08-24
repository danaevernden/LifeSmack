import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

const styles = {
  main: {
    width: '400px',
    display: 'inline-block',
    height: '250px',
    position: 'relative',
    marginLeft: '300px',
    marginTop: '100px',
    zIndex: '1'
  },
 logo: {
   height: '100px',
   zIndex: '1'
 },
 title: {
   marginTop: '100px',
   fontSize: '20px',
   zIndex: '1'
 },
 text: {
   marginTop: '20px',
   color: 'rgb(160,160,160)',
   zIndex: '1'
 },
};

type Props = {
  logo: String,
  title: String,
  text: String
}

class TourComponent extends React.Component{
  props: Props

  render() {
    const {
      logo,
      title,
      text
    } = this.props;

    return (
      <body style={styles}>
                  <div style={styles.main}>
                    <img src={logo} style={styles.logo} />

                    <div style={styles.title}>
                        {title}
                    </div>
                    <div style={styles.text}>
                        {text}
                    </div>
                  </div>
      </body>
    );
  }
}

export default TourComponent;
