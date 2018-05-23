import React, { Component } from 'react';
import './App.scss';
import './json/fazenda.json';
import Content from './container/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ranking-section">
          <div className="section-ranking">
            <div className="ranking-head">
                <img src="img/ranking-logo.png" class="ranking-logo" alt=""/>
                <div className="ranking-title-wrapper">
                    <h2 className="ranking-title">RANKING</h2>
                </div>
            </div>
            <div id="wrapper">
              <ul id="ranking-list">
                <Content />
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
