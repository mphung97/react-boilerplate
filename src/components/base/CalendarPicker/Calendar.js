import React from 'react';
import moment from 'moment';
import { YearTable, DateTable, MonthTable, Header } from './components';
import './calendar.css';

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      showYearTable: false,
      showMonthTable: false,
      showDateTable: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // const { date } = this.state;
    // if (date.toISOString().localeCompare(nextState.date.toISOString()) === 0) {
    //   return false;
    // }
    return true;
  }

  componentDidUpdate() {
    console.log(moment(this.state.date).format('DD-MM-YYYY'));
  }

  onPrev = () => {
    const { date, showYearTable } = this.state;
    const newDate = moment(date);
    if (showYearTable === true) {
      newDate.subtract(1, 'year');
    } else {
      newDate.subtract(1, 'month');
    }
    this.setState({
      date: newDate,
    });
  };

  onNext = () => {
    const { date, showYearTable } = this.state;
    const newDate = moment(date);
    if (showYearTable === true) {
      newDate.add(1, 'year');
    } else {
      newDate.add(1, 'month');
    }
    this.setState({
      date: newDate,
    });
  };

  showYearTable = () => {
    this.setState(state => ({
      showYearTable:
        state.showMonthTable === true ? false : !state.showYearTable,
      showDateTable: !state.showDateTable,
      showMonthTable: false,
    }));
  };

  pick = (data, type) => {
    let date = this.state.date;
    switch (type) {
      case 'day':
        date = moment(date).set('date', data);
        break;
      case 'month':
        date = moment(date).set('month', data);
        this.setState({
          showYearTable: false,
          showMonthTable: false,
          showDateTable: true,
        });
        break;
      case 'year':
        date = moment(date).set('year', data);
        this.setState({
          showYearTable: false,
          showMonthTable: true,
          showDateTable: false,
        });
        break;
      default:
        console.log('???');
    }
    // set date
    this.setState({
      date,
    });
  };

  render() {
    const { showYearTable, showMonthTable, showDateTable, date } = this.state;
    return (
      <div className="calendar">
        <Header
          date={date}
          prev={this.onPrev}
          next={this.onNext}
          showYearTable={this.showYearTable}
        />
        <div className="calendar__main-wrapper">
          <DateTable show={showDateTable} date={date} pick={this.pick} />
          <MonthTable
            show={showMonthTable}
            month={date.format('MMM')}
            pick={this.pick}
          />
          <YearTable
            show={showYearTable}
            year={parseInt(date.format('YYYY'), 10)}
            pick={this.pick}
          />
        </div>
      </div>
    );
  }
}
