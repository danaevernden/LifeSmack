import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CalendarMUI from 'material-ui/DatePicker/Calendar';
import FloatingActionButton from 'material-ui/FloatingActionButton';

function disableRandomDates() {
  return Math.random() > 0.7;
}

class Calendar extends React.Component{
  props: Props

  constructor(props){
    super(props)
    this.state= {
      }
    }

  render() {

    return (
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
                <div>
                  <CalendarMUI
                    firstDayOfWeek={1} //to get calendar to work
                    shouldDisableDate={disableRandomDates}
                  />
                  <FloatingActionButton/>
                </div>
              </MuiThemeProvider>
            </div>
      </div>
    );
  }
}

export default Calendar;
