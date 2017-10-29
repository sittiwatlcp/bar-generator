import React, { Component } from 'react';
import logo from './barcode-b-n.png';
import bar from './bar-b.svg'
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.code = {
      0: "#FFFFFF",
      1: "#ffb74d",
      2: "#ff9800",
      3: "#f57c00",
      4: "#e57373",
      5: "#f44336",
      6: "#d50000",
      7: "#40c4ff",
      8: "#448aff",
      9: "#2962ff"
    };
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    this.svgpath = {
      0: (this.code[this.state.value[0]]),
      1: (this.code[this.state.value[1]]),
      2: (this.code[this.state.value[2]]),
      3: (this.code[this.state.value[3]]),
      4: (this.code[this.state.value[4]]),
      5: (this.code[this.state.value[5]]),
      6: (this.code[this.state.value[6]]),
      7: (this.code[this.state.value[7]]),
      8: (this.code[this.state.value[8]]),
      9: (this.code[this.state.value[9]])
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">&lt; BARCODE / &gt;&nbsp; GENERATOR</h1>
        </header>
        <svg height="400" width="250">
          <g transform="translate(30,30) scale(0.5)">
          <g transform="translate(-16,730) scale(0.1195,-0.1195) " fill="#000000" id="svg_1">
           <path fill="black" d="m2638.39506,6347c-33,-8 -58,-24 -95,-61c-50,-51 -58,-69 -1295,-2981c-684,-1612 -1251,-2959 -1260,-2995c-14,-54 -14,-73 -4,-115c22,-96 85,-161 176,-183c67,-17 817,-16 890,0c42,10 63,22 103,63c50,50 58,68 1302,2990c688,1617 1256,2963 1263,2991c9,40 9,66 -1,114c-11,55 -19,69 -64,115c-44,44 -61,53 -110,63c-76,16 -840,14 -905,-1zm838,-246c-1,-5 -563,-1324 -1247,-2930l-1245,-2921l-379,0c-357,0 -379,1 -373,18c4,9 563,1328 1243,2930l1237,2912l384,0c224,0 382,-4 380,-9z" id="svg_2"/>
          </g>
            <path fill={this.svgpath[0]} d="m30,630l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[1]} d="m60,560l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[2]} d="m90,490l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[3]} d="m120,420l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[4]} d="m150,350l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[5]} d="m180,280l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[6]} d="m210,210l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[7]} d="m240,140l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[8]} d="m270,70l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
            <path fill={this.svgpath[9]} d="m300,0l100,-0l-30,70l-90,-0l30,-70l-7,0z"/>
          </g>
        </svg>
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} maxLength="10"/>
        </div>

      </div>
    );
  }
}


export default App;
