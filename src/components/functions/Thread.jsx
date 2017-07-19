import React from 'react';
import Post from './Post';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thread:this.props.thread
    }
    console.log(this.state.thread);
  }
  render() {
    console.log("THREAD.JSX IS BEING CALLED");
    console.log(this.state.thread.posts);
    return (
      <div>
        <h1 className="mdl-layout-title mdl-color-text--white">{this.props.thread.title}</h1>
        {this.state.thread.posts.map((post) =>
          <Post post={post} key={post.id} />
        )}
      </div>
    );
  }
}

