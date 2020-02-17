import React from "react";
import { Calendar } from "./Calendar";

export class CalendarPicker extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="input" />
        <Calendar />
      </div>
    );
  }
}
