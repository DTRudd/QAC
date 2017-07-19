import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <div className="mdl-color-text--white mdl-color--grey-800">
        <p>{this.props.post.content}</p>
        <p>{this.props.post.date}</p>
      </div>
    );
  }
}

