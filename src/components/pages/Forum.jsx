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
      threadContent:   ''
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
    alert(this.state.threadTitle + '\n' + this.state.threadContent);
    event.preventDefault();
  }

  displayThread(threadID) {
    this.toggleCreateThreadOff();
    if (threadID === -1) {
      this.setState({
        activeThread:    [],
        hasActiveThread: false
      });
    } else {
      apiConnect.getThreadByID(threadID, result => {
        this.setState({
          activeThread:   result[0],
          hasActiveThread: true
        });
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
        {this.state.hasActiveThread  === false? 
          (this.state.threads.map((thread) =>
              <h1 onClick={this.displayThread.bind(this,thread._id)} key={thread._id} className="mdl-cell mdl-cell--2-col mdl-layout-title mdl-color-text--white">{thread.title}</h1>
          ))
        :
          (
            <div>
              <button className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" onClick={this.displayThread.bind(this,-1)}>Return home</button>
              <Thread thread={this.state.activeThread} />
            </div>
          )
        }
        <div className="mdl-cell mdl-cell--12-col"></div>
        {this.state.createThread ?
          <form id="create_thread" onSubmit={this.handleSubmit}>
            <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield">
              <input placeholder="Thread title" onChange={this.handleTitleChange} className="mdl-cell mdl-cell--3-col-tablet mdl-cell--2-col-phone mdl-textfield__input mdl-color--grey-800" type="text" id="titleInp" />
              <textarea placeholder="Post content" onChange={this.handleContentChange} className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell-4-col-phone mdl-textfield__input mdl-color--grey-800" rows="5" type="text" id="contentInp"></textarea>
            </div>
            <button className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Post</button>
            <button onClick={this.toggleCreateThreadOff} className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Cancel</button>
          </form>
        :
          this.state.hasActiveThread === true ?
            <div></div>
        :
          <button onClick={this.toggleCreateThreadOn} className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" >New thread</button>
        }
      </div>
    );
  }
}

