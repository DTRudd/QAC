//Sophie
import React from 'react';
import Post from './Post';
import apiConnect from '../../api/apiConnect';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thread: [],
      createPost: false,
      postContent: '',
      loading: true
    };
    this.toggleCreatePostOn = this.toggleCreatePostOn.bind(this);
    this.toggleCreatePostOff = this.toggleCreatePostOff.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    apiConnect.getThreadByID(this.props.thread, result => {
      this.setState({
        thread: result[0],
        loading: false
      });
    });
  }

  handleContentChange(event) {
    this.setState({
      postContent: event.target.value
    });
  }

  handleSubmit(event) {
    var postID = this.props.thread + '-' + this.state.thread.posts.length;
    var content = this.state.postContent;
    var threadID = this.props.thread;
    var postData = {
      postID: postID,
      content: content,
      threadID: threadID
    };
    console.log(postData);
    apiConnect.postReply(postData, result => {
      if (result.message === "Posted.") {
        this.setState({
          createPost: false
        });
        apiConnect.getThreadByID(this.props.thread, result => {
          this.setState({
            thread: result[0]
          });
        });
      }
    });
    event.preventDefault();
  }

  toggleCreatePostOn() {
    this.setState({
      createPost: true
    });
  }

  toggleCreatePostOff() {
    this.setState({
      createPost: false
    });
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col"> 
        {this.state.loading === false ?
          <div className="mdl-cell mdl-cell--12-col">
            <h1 className="mdl-cell mdl-cell--12-col mdl-layout-title mdl-color-text--white">{this.props.thread.title}</h1>
            {this.state.thread.posts.map(post => 
             <Post postContent={post} key={post._id} />
            )}
            {this.state.createPost ?
              <form id="create_post" className="mdl-cell--12-col" onSubmit={this.handleSubmit}>
                <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield">
                  <textarea placeholder="Post content" onChange={this.handleContentChange} className="mdl-cell mdl-cell--12-col mdl-textfield__input mdl-color--grey-800" rows="5" type="text" id="contentInp"></textarea>
                </div>
                <button className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Post</button>
                <button onClick={this.toggleCreatePostOff} className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Cancel</button>
              </form>
            :
              <button onClick={this.toggleCreatePostOn} className="mdl-cell mdl-cell--2-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Reply to thread</button>
            }
          </div>
        :
          <div className="mdl-cell mdl-cell--12-col">Loading</div>
        }
      </div>
    );
  }
}

