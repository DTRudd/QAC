import React from 'react';
import Thread from '../functions/Thread.jsx';
import threads from '../../json/threads.json';

export default class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads:threads.threads,
      activeThread:[]
    }
  }

 displayThread(threadID) {
   console.log(threadID);
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
 }

  render() {
    {console.log(this.state.activeThread)};
    return(
      <div className="mdl-color-text--white">
        {this.state.activeThread.length === 0 ? 
          (this.state.threads.map((thread) =>
              <h1 onClick={this.displayThread.bind(this,thread.id)} key={thread.id} className="mdl-layout-title mdl-color-text--white">{thread.title}</h1>
          ))
        :
          (
            <div>
              <button className="mdl-button mdl-js-button mdl-button-accent mdl-color--pink-500" onClick={this.displayThread.bind(this,-1)}>Return home</button>
              <Thread thread={this.state.activeThread} />
            </div>
          )
        }
      </div>
    );
  }
}


