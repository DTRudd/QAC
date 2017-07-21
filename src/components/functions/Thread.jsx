import React from 'react';
import Post from './Post';

export default class Thread extends React.Component {
  render() {
    return (
      <div> 
        <h1 className="mdl-cell mdl-cell--12-col mdl-layout-title mdl-color-text--white">{this.props.thread.title}</h1>
        {this.props.thread.posts.map(post => 
          <Post postContent={post} key={post._id} />
        )}
        <button className="mdl-cell mdl-cell--2-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Reply to thread</button>
      </div>
    );
  }
}

