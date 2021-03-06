//Sophie
import React from 'react';
import Thread from '../functions/Thread.jsx';
import apiConnect from '../../api/apiConnect.js';

export default class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads:         [],
      hasActiveThread: false,
      activeThread:    [],
      createThread:    false,
      threadTitle:     '',
      threadContent:   '',
    }
    this.toggleCreateThreadOn = this.toggleCreateThreadOn.bind(this);
    this.toggleCreateThreadOff = this.toggleCreateThreadOff.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    apiConnect.getThreads(result => {
      this.setState({
        threads: result
      });
    });
  }

  handleTitleChange(event) {
    this.setState({
      threadTitle:event.target.value
    });
  }
  handleContentChange(event) {
    this.setState({
      threadContent:event.target.value
    });
  }
  handleSubmit(event) {
    apiConnect.getThreads(result => {
      var threadData = {
        'threadID': result.length,
        'title':    this.state.threadTitle,
        'postID':   0,
        'content':  this.state.threadContent,
        'user':     this.props.user
      };
      apiConnect.createThread(threadData, postResult => {
        if (postResult.message === 'Thread created.') {
          this.displayThread(result.length);
        }
      });
    });
    event.preventDefault();
  }

  displayThread(threadID) {
    this.toggleCreateThreadOff();
    if (threadID === -1) {
      apiConnect.getThreads(result => {
        this.setState({
          activeThread: -1,
          hasActiveThread: false,
          threads: result
        });
      });
    } else {
      this.setState({
        activeThread:    threadID,
        hasActiveThread: true
      });
    }
  }

  toggleCreateThreadOn() {
    this.setState({
      createThread: true
    });
  }

  toggleCreateThreadOff() {
    this.setState({
      createThread: false
    });
  }

  render() {
    return(
      <div className="mdl-color-text--white mdl-grid">
        {this.state.createThread && this.props.isAuth ?
          <form id="create_thread" className="mdl-cell mdl-cell--12-col" onSubmit={this.handleSubmit}>
            <h4 className="mdl-cell mdl-cell--12-col mdl-layout-title mdl-color-text--white">Create a new thread</h4>
            <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield">
              <input placeholder="Thread title" onChange={this.handleTitleChange} className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--3-col-phone mdl-textfield__input mdl-color--grey-800" type="text" id="titleInp" />
              <textarea placeholder="Post content" onChange={this.handleContentChange} className="mdl-cell mdl-cell--12-col mdl-textfield__input mdl-color--grey-800" rows="5" type="text" id="contentInp"></textarea>
            </div>
            <button className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Post</button>
            <button onClick={this.toggleCreateThreadOff} className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Cancel</button>
          </form>
        :
          <div className="mdl-cell--12-col">
            {this.state.hasActiveThread  === false ?
              <div className="mdl-cell--12-col">
                {this.state.threads.map((thread) =>
                  <div className="mdl-grid thread" key={thread._id}>
                    <h1 style={{padding: "10px 10px 10px 10px", margin: "0px 0px 0px 0px", wordWrap: "break-word"}} onClick={this.displayThread.bind(this,thread._id)} className="mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone mdl-layout-title mdl-color--grey-700 mdl-color-text--white">{thread.title}</h1>
                    <h4 style={{padding: "10px 10px 10px 10px", margin: "0px 0px 0px 0px", wordWrap: "break-word"}} onClick={this.displayThread.bind(this, thread._id)} className="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone mdl-layout-title mdl-color--grey-800 mdl-color-text--white">{thread.user}</h4>
                  </div>
                )}
                <div className="mdl-cell--12-col">
                  {this.props.isAuth ?
                    <button onClick={this.toggleCreateThreadOn} className="mdl-cell mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" >New thread</button>
                  :
                    <div></div>
                  }
                </div>
              </div>
            :
              <div className="mdl-cell--12-col">
                <button className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" onClick={this.displayThread.bind(this,-1)}>Return home</button>
                <Thread thread={this.state.activeThread} isAuth={this.props.isAuth} user={this.props.user} />
              </div>
            }
            <div className="mdl-cell mdl-cell--12-col"></div>
          </div>
        }
      </div>
    );
  }
}

