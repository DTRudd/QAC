//Sophie
import React from 'react';
import {Parser, HtmlRenderer} from 'commonmark';
import renderHTML from 'react-render-html';

export default class Post extends React.Component {
  render() {
    var reader = new Parser();
    var writer = new HtmlRenderer({smart: true, safe: true});
    return (
      <div className="mdl-cell mdl-cell--10-col mdl-color-text--white mdl-color--grey-800">
        {renderHTML(writer.render(reader.parse(this.props.postContent.content)))}
        <p>{this.props.postContent.date}</p>
      </div>
    );
  }
}

