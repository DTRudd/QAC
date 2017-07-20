import React from 'react';
import Post from './Post';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thread:this.props.thread
    }
  }
  render() {
    return (
      <div> 
        <h1 className="mdl-cell mdl-cell--12-col mdl-layout-title mdl-color-text--white">{this.props.thread.title}</h1>
        {this.state.thread.posts.map((post) =>
          <Post post={post} key={post.id} />
        )}
        <button className="mdl-cell mdl-cell--2-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Reply to thread</button>
      </div>
    );
  }
}

