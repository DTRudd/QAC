//Sophie
import React from 'react';
import {Parser, HtmlRenderer} from 'commonmark';
import renderHTML from 'react-render-html';

export default class Post extends React.Component {

  prettifyDate(inpDate) {

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dateTime = inpDate.split('T');
    var date = dateTime[0].split('-');
    var time = dateTime[1].slice(0,5);
    var suffix = this.getSuffix(date[2]);
    return time + ', ' + date[2] + suffix + ' ' + months[+date[1]-1] + ' ' + date[0];
  }

  getSuffix(dayNum) { //fighter of the nightNum
    if (dayNum === 1 || dayNum === 21 || dayNum === 31) {
      return "st";
    } else if (dayNum === 2 || dayNum === 22) {
      return "nd";
    } else if (dayNum === 3 || dayNum === 23) {
      return "rd";
    } else {
      return "th";
    }
  }

  render() {
    var reader = new Parser({smart: true, safe: true});
    var writer = new HtmlRenderer({smart: true, safe: true});
    return (
      <div className="mdl-grid">
        <div style={{padding: "0px 0px 0px 0px", margin: "0px 0px 0px 0px"}} className="mdl-cell mdl-cell--2-col mdl-color--grey-800">{this.prettifyDate(this.props.postContent.date)}</div>
        <div style={{padding: "0px 0px 0px 0px", margin: "0px 0px 0px 0px"}} className="mdl-cell mdl-cell--10-col mdl-color--grey-700">{renderHTML(writer.render(reader.parse(this.props.postContent.content)))}</div>
      </div>
    );
  }
}

