import React from 'react';

export default class FAQ extends React.Component{
  render(){
    return(
      <div className="mdl-color-text--white mdl-color--grey-700" >
        <h4 className="mdl-layout-title">Frequently asked questions</h4>
        <ul> 
          <li>How can I contact customer services?</li>
          <li>How do I get a refund?</li>
          <li>How do I complain about my recent experience?</li>
          <li>What is Audio Description?</li>
          <li>I made a mistake during my booking what should I do?</li>
          <li>How do I find out how much tickets cost?</li>
        </ul>
      </div>
    );    
  }
}
