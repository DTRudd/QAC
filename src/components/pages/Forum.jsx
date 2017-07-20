import React from 'react';
import Thread from '../functions/Thread.jsx';
import threads from '../../json/threads.json';

export default class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads:threads.threads,
      activeThread:[],
      createThread:false
    }
    this.toggleCreateThreadOn = this.toggleCreateThreadOn.bind(this);
    this.toggleCreateThreadOff = this.toggleCreateThreadOff.bind(this);
  }

  displayThread(threadID) {
    if (threadID === -1) {
      this.setState({
        activeThread:[]
      });
    } else {
      for (let ii = 0; ii < this.state.threads.length; ii++) {
        if (this.state.threads[ii].id === threadID) {
          this.setState({
            activeThread:this.state.threads[ii]
          });
        }
      }
    }
    this.toggleCreateThreadOff();
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
        {this.state.activeThread.length === 0 ? 
          (this.state.threads.map((thread) =>
              <h1 onClick={this.displayThread.bind(this,thread.id)} key={thread.id} className="mdl-cell mdl-cell--2-col mdl-layout-title mdl-color-text--white">{thread.title}</h1>
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
        {this.state.createThread === true ?
          <form id="create_thread" action="#">
            <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield">
              <input placeholder="Thread title" className="mdl-cell mdl-cell--3-col-tablet mdl-cell--2-col-phone mdl-textfield__input mdl-color--grey-800" type="text" id="titleInp" />
              <textarea placeholder="Post content" className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell-4-col-phone mdl-textfield__input mdl-color--grey-800" cols="80" rows="5" type="text" id="contentInp"></textarea>
            </div>
            <button className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Post</button>
            <button onClick={this.toggleCreateThreadOff} className="mdl-cell mdl-cell--3-col mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500">Cancel</button>
          </form>
        :
          this.state.activeThread.length !== 0 ?
            <div></div>
        :
          <button onClick={this.toggleCreateThreadOn} className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" >New thread</button>
        }
      </div>
    );
  }
}

